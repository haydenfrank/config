import Quickshell
import QtQuick
import Quickshell.Networking

PopupWindow {
    id: wifiPopup
    property bool isOpen: false
    required property var wifiModule

    function toggle() {
        isOpen = !isOpen;
    }

    visible: isOpen
    color: "transparent"

    implicitWidth: wifiPopupLabel.implicitWidth + 36
    implicitHeight: wifiPopupLabel.implicitHeight + 18

    anchor.item: wifiModule
    anchor.rect.x: (wifiModule.width - implicitWidth) / 2
    anchor.rect.y: wifiModule.height + 8

    Rectangle {
        id: wifiPopupContainer
        anchors.fill: parent
        radius: 18
        color: colors.surface_container
        border.color: colors.outline_variant
        border.width: 2
        Text {
            id: wifiPopupLabel

            font.family: "SF Pro Text"
            font.styleName: "Medium"
            font.bold: true
            font.pixelSize: 16
            color: colors.on_surface_variant
            anchors.centerIn: parent
            text: {
                if (wifiModule.ethernetDevice && wifiModule.ethernetDevice.connected) {
                    return "Ethernet connected";
                } else if (!wifiModule.wifiNetwork) {
                    return "Wi-Fi disconnected";
                } else {
                    return wifiModule.wifiNetwork.name + " (" + Math.round(wifiModule.signalStrength) + "%)";
                }
            }
        }
    }
}
