import QtQuick

GridView {
    id: grid

    property var wallpaperModel

    signal wallpaperSelected(string path)

    readonly property int columns: 4
    readonly property int rows: 4

    cellWidth: width / columns
    cellHeight: height / rows

    model: wallpaperModel

    clip: true

    delegate: Rectangle {
        required property url fileUrl
        required property string fileName

        width: grid.cellWidth
        height: grid.cellHeight

        color: "gray"

        Image {
            anchors.fill: parent
            anchors.margins: 4

            source: ThumbnailCache.thumbnail(fileUrl)

            fillMode: Image.PreserveAspectCrop

            asynchronous: true
            cache: true
        }

        MouseArea {
            anchors.fill: parent

            onClicked: {
                grid.wallpaperSelected(fileUrl.toString());
            }
        }
    }

    WheelHandler {
        onWheel: function (event) {
            grid.contentY -= event.angleDelta.y;
        }
    }
}
