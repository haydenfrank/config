import QtQuick

Item {
    id: root

    property bool primary: false
    property string wallpaper: ""
    property color timeColor: "#dee3e6"
    property color dateColor: "#bfc8cc"
    property color accentColor: "#b3cad4"
    property color borderColor: "#40484b"
    property color fieldColor: "#292f31"
    property color errorColor: "#ffb4ab"
    property string statusText: ""
    property bool statusIsError: false

    signal passwordSubmitted(string password)
    signal powerAction(string action)

    Rectangle {
        anchors.fill: parent
        color: "#000000"

        Image {
            anchors.fill: parent
            source: root.wallpaper
            fillMode: Image.PreserveAspectCrop
            asynchronous: true
            cache: true
            opacity: 0.5
        }

        Rectangle {
            anchors.fill: parent
            color: "#33000000"
        }
    }

    Text {
        anchors.centerIn: parent
        anchors.verticalCenterOffset: 200

        text: Qt.formatTime(new Date(), "h:mm")
        color: root.timeColor
        font.family: "SF Pro"
        font.pixelSize: 95
        font.weight: Font.ExtraBlack

        Timer {
            interval: 1000
            repeat: true
            running: true
            triggeredOnStart: true
            onTriggered: parent.text = Qt.formatTime(new Date(), "h:mm")
        }
    }

    Text {
        anchors.centerIn: parent
        anchors.verticalCenterOffset: 300

        text: Qt.formatDate(new Date(), "dddd, MMMM dd")
        color: root.dateColor
        font.family: "SF Pro"
        font.pixelSize: 22

        Timer {
            interval: 60000
            repeat: true
            running: true
            triggeredOnStart: true
            onTriggered: parent.text = Qt.formatDate(new Date(), "dddd, MMMM dd")
        }
    }

    Rectangle {
        visible: root.primary
        anchors.centerIn: parent
        anchors.verticalCenterOffset: -200

        width: 250
        height: 60
        radius: 18
        color: root.fieldColor
        border.width: 2
        border.color: root.borderColor

        TextInput {
            id: passwordInput

            anchors.fill: parent
            anchors.leftMargin: 18
            anchors.rightMargin: 18

            color: root.timeColor
            font.family: "SF Pro"
            font.pixelSize: 18
            horizontalAlignment: TextInput.AlignHCenter
            verticalAlignment: TextInput.AlignVCenter
            echoMode: TextInput.Password
            passwordCharacter: "•"
            selectByMouse: false
            activeFocusOnPress: true

            onAccepted: {
                root.passwordSubmitted(passwordInput.text);
                passwordInput.text = "";
            }

            Component.onCompleted: forceActiveFocus()
        }

        Text {
            anchors.fill: parent
            anchors.leftMargin: 18
            anchors.rightMargin: 18
            visible: passwordInput.text === ""
            text: root.statusText
            color: root.statusIsError ? root.errorColor : root.dateColor
            font.family: "SF Pro"
            font.pixelSize: 14
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }
    }

    Row {
        visible: root.primary
        anchors.centerIn: parent
        anchors.verticalCenterOffset: -350
        spacing: 30

        ActionButton {
            icon: ""
            color: root.accentColor
            action: "shutdown"
            onTriggered: root.powerAction(action)
        }

        ActionButton {
            icon: ""
            color: root.accentColor
            action: "reboot"
            onTriggered: root.powerAction(action)
        }

        ActionButton {
            icon: "󰤄"
            color: root.accentColor
            action: "suspend"
            onTriggered: root.powerAction(action)
        }
    }
}
