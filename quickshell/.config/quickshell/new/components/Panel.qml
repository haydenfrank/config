import QtQuick

Rectangle {
    id: root

    property bool expanded: false

    signal hoverEntered
    signal hoverExited

    width: 600
    height: expanded ? 350 : 50

    radius: expanded ? 20 : 12
    color: "#18181b"

    Behavior on height {
        NumberAnimation {
            duration: 250
            easing.type: Easing.OutCubic
        }
    }

    Behavior on radius {
        NumberAnimation {
            duration: 250
            easing.type: Easing.OutCubic
        }
    }

    MouseArea {
        anchors.fill: parent
        hoverEnabled: true

        onEntered: root.hoverEntered()
        onExited: root.hoverExited()
    }
}
