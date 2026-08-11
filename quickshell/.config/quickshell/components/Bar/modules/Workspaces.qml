import QtQuick
import Quickshell
import Quickshell.Hyprland
import Quickshell.Widgets
import QtQuick.Layouts
import qs.components.Services

Rectangle {
    id: workspaceContainer

    color: colors.surface_container_high
    border.color: colors.outline_variant
    border.width: 1
    radius: 18

    implicitWidth: workspaceRow.implicitWidth + 12
    implicitHeight: workspaceRow.implicitHeight + 8

    RowLayout {
        id: workspaceRow

        anchors.centerIn: parent
        spacing: 3

        property var thisMonitor: Hyprland.monitorFor(panelWindow.screen)
        property var otherMonitor: Hyprland.monitors.values.find(m => m !== thisMonitor)
        property var workspaceIds: []

        Timer {
            id: workspaceUpdateTimer

            interval: 50
            repeat: false

            onTriggered: {
                var ids = [];

                for (var w of Hyprland.workspaces.values) {
                    if (!ids.includes(w.id))
                        ids.push(w.id);
                }

                // Always show workspaces 1-5
                for (var i = 1; i <= 5; i++) {
                    if (!ids.includes(i))
                        ids.push(i);
                }

                ids.sort((a, b) => a - b);

                workspaceRow.workspaceIds = ids;
            }
        }

        Connections {
            target: Hyprland.workspaces

            function onValuesChanged() {
                workspaceUpdateTimer.restart();
            }
        }

        Component.onCompleted: {
            workspaceUpdateTimer.start();
        }

        Repeater {
            model: workspaceRow.workspaceIds

            delegate: Rectangle {
                required property int modelData

                property int workspaceId: modelData

                property var workspace: Hyprland.workspaces.values.find(w => w.id === workspaceId)

                property bool focusedHere: workspaceId === workspaceRow.thisMonitor?.activeWorkspace?.id

                property bool focusedThere: workspaceId === workspaceRow.otherMonitor?.activeWorkspace?.id

                implicitWidth: Math.max(65, contentRow.implicitWidth + 16)
                implicitHeight: 24

                property bool hovered: false

                radius: 18

                color: {
                    if (hovered && !focusedHere && !focusedThere)
                        return colors.surface_container_highest;

                    if (focusedHere)
                        return colors.primary;

                    if (focusedThere)
                        return colors.secondary_container;

                    return colors.surface_container_high;
                }

                Behavior on color {
                    ColorAnimation {
                        duration: 150
                        easing.type: Easing.OutQuad
                    }
                }

                Row {
                    id: contentRow

                    anchors.centerIn: parent
                    spacing: 5

                    Text {
                        text: workspaceId

                        font.family: "SF Pro Text"
                        font.styleName: "Medium"
                        font.bold: true
                        font.pixelSize: 16

                        color: {
                            if (focusedHere)
                                return colors.on_primary;

                            if (focusedThere)
                                return colors.on_secondary_container;

                            return colors.on_surface_variant;
                        }

                        Behavior on color {
                            ColorAnimation {
                                duration: 150
                                easing.type: Easing.OutQuad
                            }
                        }
                    }

                    Repeater {
                        model: workspace?.toplevels ?? []

                        delegate: Item {
                            required property var modelData
                            width: 18
                            height: 18

                            property string appClass: modelData.wayland?.appId ?? ""
                            property var iconSource: Quickshell.iconPath(AppSearch.guessIcon(appClass), "image-missing")

                            IconImage {
                                id: appIcon
                                anchors.fill: parent
                                source: parent.iconSource
                                asynchronous: true
                                mipmap: true
                            }
                        }
                    }
                }
                MouseArea {
                    anchors.fill: parent
                    cursorShape: Qt.PointingHandCursor
                    hoverEnabled: true
                    onEntered: parent.hovered = true
                    onExited: parent.hovered = false
                    onClicked: {
                        if (workspace) {
                            workspace.activate();
                        } else {
                            Hyprland.dispatch("hl.dsp.focus({workspace = " + workspaceId + "})");
                        }
                    }
                }
            }
        }
    }
}
