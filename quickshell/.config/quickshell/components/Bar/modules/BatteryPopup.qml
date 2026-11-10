import Quickshell
import QtQuick

PopupWindow {
    id: batteryPopup
    property bool isOpen: false
    required property var batteryModule

    function toggle() {
        isOpen = !isOpen;
    }

    visible: isOpen
    color: "transparent"

    implicitWidth: batteryPopupLabel.implicitWidth + 36
    implicitHeight: batteryPopupLabel.implicitHeight + 18

    anchor.item: batteryModule
    anchor.rect.x: (batteryModule.width - implicitWidth) / 2
    anchor.rect.y: batteryModule.height + 8

    Rectangle {
        id: batteryPopupContainer
        anchors.fill: parent
        radius: 18
        color: colors.surface_container
        border.color: colors.outline_variant
        border.width: 2
        Text {
            id: batteryPopupLabel

            font.family: "SF Pro Text"
            font.styleName: "Medium"
            font.bold: true
            font.pixelSize: 16
            color: colors.on_surface_variant
            anchors.centerIn: parent
            text: {
                if (isCharging) {
                    return batteryModule.batteryPercentage + "% (" + batteryModule.timeToFull + " until full)";
                } else if (isFull) {
                    return batteryModule.batteryPercentage + "% (full)";
                } else {
                    return batteryModule.batteryPercentage + "% (" + batteryModule.timeToEmpty + " until empty)";
                }
            }
        }
    }
}
