import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Services.Notifications
import Quickshell.Wayland
import Quickshell.Widgets
import qs.config

Scope {
    id: root

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
        }
    }

    PanelWindow {
        id: notificationWindow

        screen: Quickshell.screens[0]
        color: "transparent"
        visible: server.trackedNotifications.count > 0
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

            spacing: 10
            model: server.trackedNotifications
            interactive: contentHeight > height
            boundsBehavior: Flickable.StopAtBounds

            delegate: Rectangle {
                required property var modelData

                width: notificationList.width
                implicitHeight: notificationContent.implicitHeight + 24
                radius: 16
                color: modelData.urgency === NotificationUrgency.Critical
                    ? colors.error_container
                    : colors.surface_container
                border.color: colors.outline_variant
                border.width: 1

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
                        source: modelData.image || modelData.appIcon
                    }

                    ColumnLayout {
                        Layout.fillWidth: true
                        spacing: 4

                        Text {
                            Layout.fillWidth: true
                            text: modelData.summary
                            color: colors.on_surface
                            font.bold: true
                            elide: Text.ElideRight
                            maximumLineCount: 1
                        }

                        Text {
                            Layout.fillWidth: true
                            text: modelData.body
                            color: colors.on_surface_variant
                            wrapMode: Text.Wrap
                            maximumLineCount: 4
                        }

                        RowLayout {
                            Layout.fillWidth: true
                            spacing: 6

                            Text {
                                Layout.fillWidth: true
                                text: modelData.appName
                                color: colors.outline
                                font.pixelSize: 11
                                elide: Text.ElideRight
                            }

                            Repeater {
                                model: modelData.actions

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
                                    onClicked: modelData.dismiss()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
