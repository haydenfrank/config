pragma Singleton

import QtQuick
import QtCore
import Quickshell.Io

Item {
    id: thumbnailCache

    readonly property string wallpaperDirectory: StandardPaths.writableLocation(StandardPaths.HomeLocation).toString().replace("file://", "") + "/Pictures/Wallpapers"

    readonly property string cacheDirectory: StandardPaths.writableLocation(StandardPaths.CacheLocation).toString().replace("file://", "") + "/og/wallpapers"

    property var queue: []
    property bool processing: false

    Process {
        id: scanner

        stdout: StdioCollector {
            onStreamFinished: {
                var files = text.split("\n").filter(function (path) {
                    return path.length > 0;
                });

                console.log("Thumbnail scan found", files.length, "wallpapers");

                for (var i = 0; i < files.length; ++i)
                    thumbnailCache.enqueue(files[i]);

                thumbnailCache.processNext();
            }
        }

        stderr: StdioCollector {
            onStreamFinished: {
                if (text.length > 0)
                    console.log("Thumbnail scan error:", text);
            }
        }

        onExited: function (exitCode) {
            console.log("Thumbnail scan exited:", exitCode);
        }
    }

    Process {
        id: watcher

        command: ["inotifywait", "-m", "-e", "close_write", "-e", "moved_to", "--format", "%w%f", thumbnailCache.wallpaperDirectory]

        running: true

        stdout: SplitParser {
            onRead: function (line) {
                var path = line.trim();

                if (!path)
                    return;
                if (!thumbnailCache.isWallpaper(path))
                    return;
                console.log("Wallpaper changed:", path);

                thumbnailCache.enqueue(path);
                thumbnailCache.processNext();
            }
        }

        stderr: StdioCollector {
            onStreamFinished: {
                if (text.length > 0)
                    console.log("Wallpaper watcher error:", text);
            }
        }

        onExited: function (exitCode) {
            console.log("Wallpaper watcher exited:", exitCode);
        }
    }

    Process {
        id: generator

        property string currentSource: ""

        stdout: StdioCollector {
            onStreamFinished: {
                if (text.length > 0)
                    console.log("magick:", text);
            }
        }

        stderr: StdioCollector {
            onStreamFinished: {
                if (text.length > 0)
                    console.log("magick error:", text);
            }
        }

        onExited: function (exitCode) {
            console.log("Thumbnail finished:", currentSource, "exit:", exitCode);

            thumbnailCache.processing = false;
            thumbnailCache.processNext();
        }
    }

    function sourcePath(source) {
        var path = source.toString();

        if (path.startsWith("file://"))
            path = path.substring(7);

        return path;
    }

    function isWallpaper(path) {
        var lower = path.toLowerCase();

        return lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png") || lower.endsWith(".webp");
    }

    function thumbnailPath(source) {
        var path = thumbnailCache.sourcePath(source);

        var filename = path.substring(path.lastIndexOf("/") + 1);

        return thumbnailCache.cacheDirectory + "/" + filename;
    }

    function thumbnail(source) {
        return "file://" + thumbnailCache.thumbnailPath(source);
    }

    function enqueue(source) {
        var input = thumbnailCache.sourcePath(source);

        if (!input)
            return;
        if (!thumbnailCache.isWallpaper(input))
            return;
        for (var i = 0; i < thumbnailCache.queue.length; ++i) {
            if (thumbnailCache.queue[i] === input)
                return;
        }

        if (thumbnailCache.processing && generator.currentSource === input) {
            return;
        }

        thumbnailCache.queue.push(input);

        console.log("Queued thumbnail:", input);
    }

    function processNext() {
        if (thumbnailCache.processing)
            return;
        if (thumbnailCache.queue.length === 0)
            return;
        var input = thumbnailCache.queue.shift();
        var output = thumbnailCache.thumbnailPath(input);

        thumbnailCache.processing = true;

        generator.currentSource = input;

        console.log("Generating thumbnail:", input);

        generator.command = ["sh", "-c", "mkdir -p \"$1\" && " + "if [ ! -f \"$2\" ] || [ \"$3\" -nt \"$2\" ]; then " + "magick \"$3\" " + "-thumbnail '400x300^' " + "-gravity center " + "-extent 400x300 " + "\"$2\"; " + "fi", "thumbnail", thumbnailCache.cacheDirectory, output, input];

        generator.running = true;
    }

    function scan() {
        console.log("Scanning:", thumbnailCache.wallpaperDirectory);

        scanner.command = ["find", thumbnailCache.wallpaperDirectory, "-maxdepth", "1", "-type", "f", "(", "-iname", "*.jpg", "-o", "-iname", "*.jpeg", "-o", "-iname", "*.png", "-o", "-iname", "*.webp", ")"];

        scanner.running = true;
    }

    Component.onCompleted: {
        console.log("ThumbnailCache started");

        console.log("Wallpaper directory:", thumbnailCache.wallpaperDirectory);

        console.log("Cache directory:", thumbnailCache.cacheDirectory);

        scan();
    }
}
