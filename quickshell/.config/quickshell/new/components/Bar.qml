import QtQuick

Rectangle {
    id: root

    signal hovered

    color: "#18181b"
    radius: 12

    Row {
        anchors.centerIn: parent
        spacing: 20

        Text {
            text: "1  2  3  4  5"
            color: "white"
        }

        Text {
            text: "12:34"
            color: "white"
        }

        Text {
            text: "WiFi"
            color: "white"
        }
    }

    MouseArea {
        anchors.fill: parent
        hoverEnabled: true

        onEntered: root.hovered()
    }
}
