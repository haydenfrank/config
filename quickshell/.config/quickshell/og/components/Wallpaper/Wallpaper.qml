import QtQuick
import Quickshell
import Quickshell.Io
import qs.config

PanelWindow {
    id: root

    property bool opened: false

    visible: opened
    focusable: true
    color: "transparent"

    anchors {
        top: true
        bottom: true
        left: true
        right: true
    }

    Colors {
        id: colors
    }

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

    // Transparent fullscreen click-catcher.
    MouseArea {
        id: outsideArea

        anchors.fill: parent

        onClicked: {
            root.opened = false;
        }

        Rectangle {
            id: container

            anchors.centerIn: parent

            width: 800
            height: 600

            color: colors.surface_container
            radius: 20
            border.width: 2
            border.color: colors.outline_variant

            // Prevent clicks inside the panel from reaching outsideArea.
            MouseArea {
                anchors.fill: parent

                onClicked: {
                    mouse.accepted = true;
                }

                WallpaperGrid {
                    id: grid

                    anchors.fill: parent
                    anchors.margins: 12

                    wallpaperModel: wallpaperModel.model

                    onWallpaperSelected: function (path) {
                        root.setWallpaper(path);
                    }
                }
            }
        }
    }

    Component.onCompleted: {
        console.log("Wallpaper loaded");
        console.log("Thumbnail cache:", ThumbnailCache.cacheDirectory);
    }

    onOpenedChanged: {
        if (opened) {
            Qt.callLater(function () {
                grid.forceActiveFocus();
            });
        }
    }
}
