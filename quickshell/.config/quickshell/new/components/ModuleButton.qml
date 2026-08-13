import QtQuick

Rectangle {
    id: root

    property string title: ""
    property string icon: ""

    signal clicked

    width: 120
    height: 100

    radius: 16
    color: mouse.containsMouse ? "#3f3f46" : "#27272a"

    Column {
        anchors.centerIn: parent
        spacing: 8

        Text {
            anchors.horizontalCenter: parent.horizontalCenter

            text: root.icon
            color: "white"
            font.pixelSize: 28
        }

        Text {
            anchors.horizontalCenter: parent.horizontalCenter

            text: root.title
            color: "white"
        }
    }

    MouseArea {
        id: mouse

        anchors.fill: parent
        hoverEnabled: true

        onClicked: root.clicked()
    }
}
