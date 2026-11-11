import QtQuick

Item {
    id: root

    property bool primary: false
    property bool fadingOut: false
    property string wallpaper: ""
    property color timeColor: "#dee3e6"
    property color dateColor: "#bfc8cc"
    property color accentColor: "#b3cad4"
    property color borderColor: "#40484b"
    property color fieldColor: "#292f31"
    property color errorColor: "#ffb4ab"
    property string statusText: ""
    property bool statusIsError: false
    property string passwordText: ""
    readonly property bool wallpaperReady: wallpaper === ""
        || backgroundImage.status === Image.Ready
        || backgroundImage.status === Image.Error

    signal passwordSubmitted(string password)
    signal passwordEdited(string password)
    signal powerAction(string action)

    onPasswordTextChanged: {
        if (passwordInput.text !== root.passwordText)
            passwordInput.text = root.passwordText;
    }

    opacity: fadingOut ? 0 : wallpaperReady ? 1 : 0

    Behavior on opacity {
        enabled: root.wallpaperReady

        NumberAnimation {
            duration: 250
            easing.type: Easing.InOutCubic
        }
    }

    Rectangle {
        anchors.fill: parent
        color: "#000000"

        Image {
            id: backgroundImage

            anchors.fill: parent
            source: root.wallpaper
            fillMode: Image.PreserveAspectCrop
            asynchronous: true
            cache: true
            sourceSize.width: 2560
            opacity: 0.5
        }

        Rectangle {
            anchors.fill: parent
            color: "#33000000"
        }
    }

    Text {
        anchors.centerIn: parent
        anchors.verticalCenterOffset: -200

        text: Qt.formatTime(new Date(), "h:mm")
        color: root.timeColor
        font.family: "SF Pro"
        font.pixelSize: 95
        font.weight: Font.Black

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
        anchors.verticalCenterOffset: -100

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
        anchors.centerIn: parent
        anchors.verticalCenterOffset: 100

        width: 360
        height: 60
        radius: 18
        color: root.fieldColor
        border.width: 2
        border.color: root.borderColor

        Text {
            anchors.left: parent.left
            anchors.leftMargin: 18
            anchors.verticalCenter: parent.verticalCenter

            text: "󰈷"
            color: root.accentColor
            font.family: "JetBrainsMono Nerd Font Propo"
            font.pixelSize: 24
        }

        TextInput {
            id: passwordInput

            anchors.fill: parent
            anchors.leftMargin: 54
            anchors.rightMargin: 18

            color: root.timeColor
            font.family: "SF Pro"
            font.pixelSize: 18
            horizontalAlignment: TextInput.AlignHCenter
            verticalAlignment: TextInput.AlignVCenter
            echoMode: TextInput.Password
            passwordCharacter: "•"
            selectByMouse: false
            enabled: root.primary
            focus: root.primary
            cursorVisible: false
            cursorDelegate: Item {}
            activeFocusOnPress: root.primary

            onAccepted: {
                root.passwordSubmitted(passwordInput.text);
            }

            onTextChanged: {
                if (root.primary && text !== root.passwordText)
                    root.passwordEdited(text);
            }

            Component.onCompleted: {
                passwordInput.text = root.passwordText;
                if (root.primary)
                    Qt.callLater(function () {
                        forceActiveFocus();
                    });
            }

            Timer {
                interval: 100
                running: root.primary
                repeat: false
                onTriggered: passwordInput.forceActiveFocus()
            }
        }

        Text {
            anchors.fill: parent
            anchors.leftMargin: 54
            anchors.rightMargin: 18
            visible: passwordInput.text === ""
            text: "Use password or biometric authentication"
            color: root.dateColor
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
        anchors.verticalCenterOffset: 350
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
