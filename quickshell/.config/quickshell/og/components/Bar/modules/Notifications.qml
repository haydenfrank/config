import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Hyprland
import Quickshell.Services.Notifications
import Quickshell.Wayland
import Quickshell.Widgets
import qs.config
import qs.components.Services

Scope {
    id: root

    ListModel {
        id: notificationModel
    }

    function activeScreen() {
        const focusedMonitor = Hyprland.focusedMonitor;
        return Quickshell.screens.find(screen => screen.name === focusedMonitor?.name)
            || Quickshell.screens[0];
    }

    function hasNotificationsFor(screenName) {
        for (let index = 0; index < notificationModel.count; index++) {
            if (notificationModel.get(index).screenName === screenName) {
                return true;
            }
        }

        return false;
    }

    function iconSourceFor(notification) {
        if (notification.image) {
            return notification.image;
        }

        const appIcon = Quickshell.iconPath(notification.appIcon, true);
        if (appIcon) {
            return appIcon;
        }

        const guessedIcon = AppSearch.guessIcon(notification.appName);
        if (guessedIcon === "application-x-executable" || guessedIcon === "image-missing") {
            return "";
        }

        return Quickshell.iconPath(guessedIcon, true);
    }

    Colors {
        id: colors
    }

    NotificationServer {
        id: server

        keepOnReload: true
        persistenceSupported: true
        bodySupported: true
        bodyMarkupSupported: false
        bodyHyperlinksSupported: false
        bodyImagesSupported: true
        actionsSupported: true
        actionIconsSupported: false
        imageSupported: true

        onNotification: notification => {
            notification.tracked = true;

            const targetScreen = root.activeScreen();
            notificationModel.append({
                notification: notification,
                screenName: targetScreen?.name || ""
            });
            notification.closed.connect(() => {
                for (let index = 0; index < notificationModel.count; index++) {
                    if (notificationModel.get(index).notification === notification) {
                        notificationModel.remove(index);
                        break;
                    }
                }
            });
        }
    }

    Variants {
        model: Quickshell.screens

        PanelWindow {
            id: notificationWindow

            required property var modelData

            screen: modelData
            color: "transparent"
            visible: root.hasNotificationsFor(modelData.name)
            implicitWidth: 420
            implicitHeight: Math.min(900, notificationList.contentHeight + 24)

            WlrLayershell.namespace: "notifications"
            WlrLayershell.layer: WlrLayer.Overlay
            WlrLayershell.exclusiveZone: 0

            anchors {
                top: true
                right: true
            }

            ListView {
                id: notificationList

                anchors {
                    fill: parent
                    margins: 12
                }

                spacing: 0
                model: notificationModel
                interactive: contentHeight > height
                boundsBehavior: Flickable.StopAtBounds

                delegate: Rectangle {
                    required property var notification
                    required property string screenName

                    width: notificationList.width
                    implicitHeight: notificationContent.implicitHeight + 24
                    height: screenName === notificationWindow.modelData.name ? implicitHeight : 0
                    opacity: 1
                    radius: 16
                    color: notification.urgency === NotificationUrgency.Critical
                        ? colors.error_container
                        : colors.surface_container
                    border.color: colors.outline_variant
                    border.width: 1

                    Behavior on opacity {
                        NumberAnimation {
                            duration: 300
                        }
                    }

                    Timer {
                        interval: 10000
                        running: screenName === notificationWindow.modelData.name

                        onTriggered: {
                            parent.opacity = 0;
                            removeTimer.start();
                        }
                    }

                    Timer {
                        id: removeTimer
                        interval: 300

                        onTriggered: notification.expire()
                    }

                    RowLayout {
                        id: notificationContent

                        anchors {
                            left: parent.left
                            right: parent.right
                            top: parent.top
                            margins: 12
                        }

                        spacing: 10

                        IconImage {
                            Layout.preferredWidth: 42
                            Layout.preferredHeight: 42
                            source: root.iconSourceFor(notification)
                            visible: source !== ""
                            mipmap: true
                        }

                        ColumnLayout {
                            Layout.fillWidth: true
                            spacing: 4

                            Text {
                                Layout.fillWidth: true
                                text: notification.summary
                                color: colors.on_surface
                                font.bold: true
                                elide: Text.ElideRight
                                maximumLineCount: 1
                            }

                            Text {
                                Layout.fillWidth: true
                                text: notification.body
                                color: colors.on_surface_variant
                                wrapMode: Text.Wrap
                                maximumLineCount: 4
                            }

                            RowLayout {
                                Layout.fillWidth: true
                                spacing: 6

                                Text {
                                    Layout.fillWidth: true
                                    text: notification.appName
                                    color: colors.outline
                                    font.pixelSize: 11
                                    elide: Text.ElideRight
                                }

                                Repeater {
                                    model: notification.actions

                                    delegate: Rectangle {
                                        required property var modelData

                                        implicitWidth: actionLabel.implicitWidth + 16
                                        implicitHeight: 26
                                        radius: 13
                                        color: colors.primary_container

                                        Text {
                                            id: actionLabel

                                            anchors.centerIn: parent
                                            text: modelData.text
                                            color: colors.on_primary_container
                                            font.pixelSize: 11
                                        }

                                        MouseArea {
                                            anchors.fill: parent
                                            onClicked: modelData.invoke()
                                        }
                                    }
                                }

                                Rectangle {
                                    implicitWidth: 26
                                    implicitHeight: 26
                                    radius: 13
                                    color: closeMouse.containsMouse
                                        ? colors.surface_container_highest
                                        : "transparent"

                                    Text {
                                        anchors.centerIn: parent
                                        text: "\u00d7"
                                        color: colors.on_surface_variant
                                        font.pixelSize: 18
                                    }

                                    MouseArea {
                                        id: closeMouse

                                        anchors.fill: parent
                                        hoverEnabled: true
                                        onClicked: notification.dismiss()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
