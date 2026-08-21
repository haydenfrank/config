import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Io
import qs.config
import qs.components.Bar.modules
import qs.components.Services

Scope {
    Colors {
        id: colors
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
                implicitWidth: barContainerRow.implicitWidth + 36
                implicitHeight: 36
                radius: 18
                border.color: colors.outline_variant
                border.width: 2

                RowLayout {
                    id: barContainerRow

                    anchors.centerIn: parent
                    spacing: 18

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
