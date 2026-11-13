import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Io
import qs.config
import qs.components.Bar.modules
import qs.components.Services
import qs.components.Wallpaper

Scope {
    property bool wallpaperOpen: false

    Colors {
        id: colors
    }

    IpcHandler {
        target: "wallpaper"

        function toggle() {
            wallpaperOpen = !wallpaperOpen;
        }
    }

    Variants {
        model: Quickshell.screens

        PanelWindow {
            id: barWindow

            required property var modelData

            screen: modelData
            color: "transparent"
            implicitHeight: barContainer.implicitHeight + 6

            anchors {
                top: true
                left: true
                right: true
            }

            Rectangle {
                id: barContainer

                anchors.horizontalCenter: parent.horizontalCenter
                anchors.bottom: parent.bottom
                color: colors.surface_container
                implicitWidth: wallpaperOpen ? wallpaperSelector.implicitWidth + 24 : barContainerRow.implicitWidth + 36
                implicitHeight: wallpaperOpen ? wallpaperSelector.implicitHeight + 12 : 36
                radius: 18
                border.color: colors.outline_variant
                border.width: 2

                Wallpaper {
                    id: wallpaperSelector

                    anchors.centerIn: parent
                    opened: wallpaperOpen

                    onClosed: wallpaperOpen = false;
                }

                RowLayout {
                    id: barContainerRow

                    anchors.centerIn: parent
                    spacing: 18
                    visible: !wallpaperSelector.opened

                    Clock {
                        id: clockModule
                    }

                    Workspaces {
                        id: workspacesModule
                    }

                    Wifi {
                        id: wifiModule
                    }

                    Battery {
                        id: batteryModule
                    }
                }
            }
        }
    }

    IpcHandler {
        target: "bar"

        function refresh(): void {
            Quickshell.reload(false);
        }
    }
}
