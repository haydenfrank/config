import QtQuick

Item {
    id: root

    property string icon: ""
    property color color: "#b3cad4"
    property string action: ""

    signal triggered()

    width: 28
    height: 36

    Text {
        anchors.fill: parent
        text: root.icon
        color: root.color
        font.family: "JetBrainsMono Nerd Font Propo"
        font.pixelSize: 28
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
    }

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: root.triggered()
    }
}
