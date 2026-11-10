import QtQuick
import Quickshell
import Quickshell.Io
import qs.config

PanelWindow {
    id: wallpaperWindow

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
    }
    IpcHandler {
        target: "wallpaper"

        function toggle() {
            wallpaperWindow.opened = !wallpaperWindow.opened;
        }
    }

    function setWallpaper(path) {
        if (!path)
            return;

        if (path.startsWith("file://"))
            path = path.substring(7);

        matugenProcess.command = ["setsid", "-f", "matugen", "image", path, "--source-color-index", "0"];

        matugenProcess.running = true;

        wallpaperWindow.opened = false;
    }

    // Transparent fullscreen click-catcher.
    MouseArea {
        id: outsideArea

        anchors.fill: parent

        onClicked: {
            wallpaperWindow.opened = false;
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
                        wallpaperWindow.setWallpaper(path);
                    }
                }
            }
        }
    }

    Component.onCompleted: {
        ThumbnailCache;
    }

    onOpenedChanged: {
        if (opened) {
            Qt.callLater(function () {
                grid.forceActiveFocus();
            });
        }
    }
}
