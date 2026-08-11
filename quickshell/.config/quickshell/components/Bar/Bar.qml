import QtQuick
import QtQuick.Layouts
import Quickshell
import "../../config"
import "modules"
import "../Services"

Scope {
    // no more time object

    Colors {
        id: colors
    }

    Variants {
        model: Quickshell.screens

        PanelWindow {
            id: panelWindow

            required property var modelData

            screen: modelData
            color: "transparent"
            implicitHeight: island.implicitHeight + 6

            anchors {
                top: true
                left: true
                right: true
            }

            Rectangle {
                id: island

                anchors.horizontalCenter: parent.horizontalCenter
                anchors.bottom: parent.bottom
                color: colors.surface_container
                implicitWidth: rowLayout.implicitWidth + 36
                implicitHeight: 36
                radius: 18
                border.color: colors.outline_variant
                border.width: 2

                RowLayout {
                    id: rowLayout

                    anchors.centerIn: parent
                    spacing: 18

                    Clock {}

                    Workspaces {}

                    Wifi {}

                    Battery {}
                }
            }
        }
    }
}
