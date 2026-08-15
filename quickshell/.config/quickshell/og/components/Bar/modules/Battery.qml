import QtQuick
import Quickshell.Services.UPower
import qs.components.Bar.modules

Text {
    id: batteryModule
    property var batteryIcons: ["󰂎", "󰁺", "󰁻", "󰁼", "󰁽", "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"]

    property var chargingIcons: ["󰢟", "󰢜", "󰂆", "󰂇", "󰂈", "󰢝", "󰂉", "󰢞", "󰂊", "󰂋", "󰂅"]

    property real batteryPercentage: UPower.displayDevice.percentage

    property bool isCharging: UPower.displayDevice.state === UPowerDeviceState.Charging
    property bool isFull: UPower.displayDevice.state === UPowerDeviceState.FullyCharged

    text: {
        if (isFull) {
            return batteryIcons[10];
        }
        var icons = isCharging ? chargingIcons : batteryIcons;
        var index = Math.floor(batteryPercentage * 10);
        index = Math.max(0, Math.min(10, index));
        return icons[index];
    }

    font.family: "JetBrainsMono Nerd Font"
    font.styleName: "Propo"
    font.pixelSize: 16
    color: colors.tertiary
    BatteryPopup {
        id: batteryPopup
        batteryModule: batteryModule
    }
    MouseArea {
        id: batteryModuleMouseArea
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
            batteryPopup.toggle();
            cursorShape = Qt.PointingHandCursor;
        }
        onExited: {
            batteryPopup.toggle();
        }
    }
}
