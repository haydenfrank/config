import Quickshell
import Quickshell.Wayland
import QtQuick
import "components"

PanelWindow {
    id: root

    anchors {
        top: true
        left: true
        right: true
    }

    implicitHeight: 400

    color: "transparent"

    property bool expanded: false
    property string page: "bar"

    Panel {
        id: panel

        anchors.top: parent.top
        anchors.horizontalCenter: parent.horizontalCenter

        expanded: root.expanded

        Bar {
            id: bar

            anchors.top: parent.top
            anchors.horizontalCenter: parent.horizontalCenter

            width: parent.width
            height: 50

            onHovered: root.expanded = true
        }

        ModuleGrid {
            id: grid

            anchors.top: bar.bottom
            anchors.horizontalCenter: parent.horizontalCenter

            visible: root.expanded && root.page === "bar"

            onModuleSelected: module => {
                root.page = module;
            }

            Behavior on opacity {
                NumberAnimation {
                    duration: 150
                }
            }
        }
    }
}
