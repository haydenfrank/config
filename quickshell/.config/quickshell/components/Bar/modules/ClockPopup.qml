import Quickshell
import QtQuick
import qs.components.Services

PopupWindow {
    id: clockPopup
    property bool isOpen: false
    required property var clockModule

    function toggle() {
        isOpen = !isOpen;
    }

    visible: isOpen
    color: "transparent"

    implicitWidth: clockPopupLabel.implicitWidth + 36
    implicitHeight: clockPopupLabel.implicitHeight + 18

    anchor.item: clockModule
    anchor.rect.x: (clockModule.width - implicitWidth) / 2
    anchor.rect.y: clockModule.height + 8

    Rectangle {
        id: clockPopupContainer
        anchors.fill: parent
        radius: 18
        color: colors.surface_container
        border.color: colors.outline_variant
        border.width: 2
        Text {
            id: clockPopupLabel
            font.family: "SF Pro Text"
            font.styleName: "Medium"
            font.bold: true
            font.pixelSize: 16
            color: colors.on_surface_variant
            anchors.centerIn: parent
            text: clockModule.date
        }
    }
}
