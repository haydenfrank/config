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

                for (var i = 0; i < files.length; ++i)
                    thumbnailCache.enqueue(files[i]);

                thumbnailCache.processNext();
            }
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

                thumbnailCache.enqueue(path);
                thumbnailCache.processNext();
            }
        }
    }

    Process {
        id: generator

        property string currentSource: ""

        onExited: {
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

        generator.command = ["sh", "-c", "mkdir -p \"$1\" && " + "if [ ! -f \"$2\" ] || [ \"$3\" -nt \"$2\" ]; then " + "magick \"$3\" " + "-thumbnail '400x300^' " + "-gravity center " + "-extent 400x300 " + "\"$2\"; " + "fi", "thumbnail", thumbnailCache.cacheDirectory, output, input];

        generator.running = true;
    }

    function scan() {
        scanner.command = ["find", thumbnailCache.wallpaperDirectory, "-maxdepth", "1", "-type", "f", "(", "-iname", "*.jpg", "-o", "-iname", "*.jpeg", "-o", "-iname", "*.png", "-o", "-iname", "*.webp", ")"];

        scanner.running = true;
    }

    Component.onCompleted: {
        scan();
    }
}
