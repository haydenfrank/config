import QtQuick
import Quickshell.Services.UPower

Text {
  property var batteryIcons: [
    "󰂎", "󰁺", "󰁻", "󰁼", "󰁽",
    "󰁾", "󰁿", "󰂀", "󰂁", "󰂂", "󰁹"
  ]

  property var chargingIcons: [
    "󰢟", "󰢜", "󰂆", "󰂇", "󰂈",
    "󰢝", "󰂉", "󰢞", "󰂊", "󰂋", "󰂅"
  ]

  property real batteryPercentage: UPower.displayDevice.percentage

  property bool isCharging:
    UPower.displayDevice.state === UPowerDeviceState.Charging

  text: {
    var icons = isCharging ? chargingIcons : batteryIcons
    var index = Math.floor(batteryPercentage * 10)
    index = Math.max(0, Math.min(10, index))
    return icons[index]
  }

  font.family: "JetBrainsMono Nerd Font"
  font.styleName: "Propo"
  font.pixelSize: 16
  color: colors.tertiary
}
