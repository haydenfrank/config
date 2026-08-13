import QtQuick

Item {
    id: root

    signal moduleSelected(string module)

    Grid {
        anchors.centerIn: parent

        columns: 3
        spacing: 10

        ModuleButton {
            title: "Wi-Fi"
            icon: "WiFi"

            onClicked: root.moduleSelected("wifi")
        }

        ModuleButton {
            title: "Bluetooth"
            icon: "BT"

            onClicked: root.moduleSelected("bluetooth")
        }

        ModuleButton {
            title: "Audio"
            icon: "♪"

            onClicked: root.moduleSelected("audio")
        }

        ModuleButton {
            title: "Brightness"
            icon: "☼"

            onClicked: root.moduleSelected("brightness")
        }

        ModuleButton {
            title: "Battery"
            icon: "Battery"

            onClicked: root.moduleSelected("battery")
        }

        ModuleButton {
            title: "Power"
            icon: "Power"

            onClicked: root.moduleSelected("power")
        }
    }
}
