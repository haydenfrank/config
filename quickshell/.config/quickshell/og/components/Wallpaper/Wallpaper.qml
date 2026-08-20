import QtQuick
import Quickshell
import Quickshell.Io

PanelWindow {
    id: root
    Component.onCompleted: {
        console.log("Wallpaper loaded");
        console.log("Thumbnail cache:", ThumbnailCache.cacheDirectory);
    }
    property bool opened: false

    visible: opened

    implicitWidth: 800
    implicitHeight: 600

    color: "black"

    WallpaperModel {
        id: wallpaperModel
    }

    Process {
        id: matugenProcess

        stdout: StdioCollector {
            onStreamFinished: {
                console.log("matugen stdout:", this.text);
            }
        }

        stderr: StdioCollector {
            onStreamFinished: {
                console.log("matugen stderr:", this.text);
            }
        }

        onExited: function (exitCode, exitStatus) {
            console.log("matugen exited:", exitCode);
        }
    }
    IpcHandler {
        target: "wallpaper"

        function toggle() {
            root.opened = !root.opened;
        }

        function close() {
            root.opened = false;
        }

        function refresh() {
            wallpaperModel.refresh();
        }

        function random() {
            if (wallpaperModel.model.count === 0)
                return;
            var index = Math.floor(Math.random() * wallpaperModel.model.count);

            var path = wallpaperModel.model.get(index, "fileURL");

            root.setWallpaper(path);
        }

        function set(path) {
            root.setWallpaper(path);
        }
    }

    function setWallpaper(path) {
        if (!path)
            return;
        if (path.startsWith("file://"))
            path = path.substring(7);

        console.log("Running matugen:", path);

        matugenProcess.command = ["setsid", "-f", "matugen", "image", path, "--source-color-index", "0"];

        matugenProcess.running = true;

        root.opened = false;
    }

    WallpaperGrid {
        id: grid

        anchors.fill: parent

        wallpaperModel: wallpaperModel.model

        onWallpaperSelected: function (path) {
            wallpaper.setWallpaper(path);
        }
    }
}
