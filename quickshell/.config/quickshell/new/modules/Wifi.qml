import QtQuick

Rectangle {
    color: "transparent"

    Column {
        anchors.centerIn: parent
        spacing: 15

        Text {
            text: "Wi-Fi"
            color: "white"
            font.pixelSize: 28
        }

        Text {
            text: "Wi-Fi module"
            color: "#a1a1aa"
        }

        Text {
            text: "Back"
            color: "white"

            MouseArea {
                anchors.fill: parent

                onClicked: {
                    // We'll connect this to the shell state.
                }
            }
        }
    }
}
