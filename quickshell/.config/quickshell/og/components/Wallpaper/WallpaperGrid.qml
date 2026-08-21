import QtQuick
import qs.config

GridView {
    id: grid

    Colors {
        id: colors
    }

    property var wallpaperModel

    boundsBehavior: Flickable.StopAtBounds

    signal wallpaperSelected(string path)

    readonly property int columns: 4
    readonly property int rows: 4

    cellWidth: width / columns
    cellHeight: height / rows

    model: wallpaperModel
    clip: true

    focus: true
    activeFocusOnTab: true
    keyNavigationEnabled: true
    keyNavigationWraps: false
    currentIndex: 0

    delegate: Item {
        id: delegateItem

        required property int index
        required property url fileUrl
        required property string fileName

        width: grid.cellWidth
        height: grid.cellHeight

        Rectangle {
            id: outerRect

            anchors.centerIn: parent

            width: parent.width - 6
            height: parent.height - 6

            border.color: grid.currentIndex === index ? colors.primary : colors.outline_variant

            border.width: 2
            color: colors.surface_container_high
            radius: 18

            Rectangle {
                anchors.fill: parent
                anchors.margins: 18

                border.width: 2
                border.color: colors.outline_variant

                Image {
                    id: thumbnailImage

                    anchors.fill: parent
                    anchors.margins: 2

                    source: ThumbnailCache.thumbnail(fileUrl)

                    fillMode: Image.PreserveAspectCrop
                    cache: true
                }
            }

            MouseArea {
                anchors.fill: parent

                onClicked: {
                    if (grid.currentIndex !== index) {
                        grid.currentIndex = index;
                        grid.forceActiveFocus();
                    } else {
                        grid.wallpaperSelected(fileUrl.toString());
                    }
                }
            }
        }
    }

    Keys.onReturnPressed: {
        if (grid.currentItem)
            grid.wallpaperSelected(grid.currentItem.fileUrl.toString());
    }
}
