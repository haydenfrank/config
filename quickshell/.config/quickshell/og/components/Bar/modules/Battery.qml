import QtQuick
import Quickshell.Services.UPower
import qs.components.Bar.modules

Text {
    id: batteryModule
    property var batteryIcons: ["󰂎", "󰁺", "󰁻", "󰁼", "󰁽", "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"]

    property var chargingIcons: ["󰢟", "󰢜", "󰂆", "󰂇", "󰂈", "󰢝", "󰂉", "󰢞", "󰂊", "󰂋", "󰂅"]

    property bool isCharging: UPower.displayDevice.state === UPowerDeviceState.Charging
    property bool isPlugged: UPower.displayDevice.state === UPowerDeviceState.Charging || UPower.displayDevice.state === UPowerDeviceState.FullyCharged
    property bool isFull: UPower.displayDevice.state === UPowerDeviceState.FullyCharged
    property var batteryPercentage: Math.round(UPower.displayDevice.percentage * 100) + "%"
    property var timeToEmpty: formatTime(UPower.displayDevice.timeToEmpty)
    property var timeToFull: formatTime(UPower.displayDevice.timeToFull)

    function formatTime(seconds) {
        if (seconds <= 0)
            return "";
        var h = Math.floor(seconds / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        return (h > 0 ? h : "") + (h > 0 ? "h" : "") + (m > 0 ? m : "") + (m > 0 ? "m" : "");
    }

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
