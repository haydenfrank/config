import QtQuick
import Quickshell.Networking
import Quickshell
import qs.components.Services

Text {
    property var wifiIcons: ["󰤯" // disconnected
        , "󰤟" // 1-25%
        , "󰤢" // 26-50%
        , "󰤥" // 51-75%
        , "󰤨"  // 76-100%
    ]

    property string ethernetIcon: "󰈀"

    property var wifiDevice: Networking.devices.values.find(device => device.type === DeviceType.Wifi)

    property var ethernetDevice: Networking.devices.values.find(device => device.type === DeviceType.Ethernet)

    property var wifiNetwork: wifiDevice ? wifiDevice.networks.values.find(network => network.connected) : null

    property real signalStrength: wifiNetwork ? wifiNetwork.signalStrength * 100 : 0

    text: {
        // Ethernet connected
        if (ethernetDevice && ethernetDevice.connected)
            return ethernetIcon;

        // Wi-Fi disconnected
        if (!wifiNetwork)
            return wifiIcons[0];

        // Wi-Fi signal strength
        if (signalStrength < 25)
            return wifiIcons[1];

        if (signalStrength < 50)
            return wifiIcons[2];

        if (signalStrength < 75)
            return wifiIcons[3];

        return wifiIcons[4];
    }

    font.family: "JetBrainsMono Nerd Font"
    font.styleName: "Propo"
    font.pixelSize: 16
    color: colors.primary
    Component.onCompleted: {
        WifiMenu;
    }

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        hoverEnabled: true
        onClicked: {
            WifiMenu.toggle();
        }
    }
}
