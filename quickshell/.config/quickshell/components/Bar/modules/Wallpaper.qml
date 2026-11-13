import QtQuick
import Quickshell

Text {
    id: wallpaperModule

    text: "󰸉"
    font.family: "JetBrainsMono Nerd Font"
    font.styleName: "Propo"
    font.pixelSize: 16
    color: colors.primary

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor

        onClicked: {
            Quickshell.execDetached(["qs", "ipc", "call", "wallpaper", "toggle"]);
        }
    }
}
