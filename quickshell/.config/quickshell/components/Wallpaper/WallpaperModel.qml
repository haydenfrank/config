import QtQuick
import QtCore
import Qt.labs.folderlistmodel

QtObject {
    id: wallpaperModel

    readonly property string wallpaperDirectory: StandardPaths.writableLocation(StandardPaths.HomeLocation) + "/Pictures/Wallpapers"

    property FolderListModel model: FolderListModel {
        folder: Qt.url(wallpaperModel.wallpaperDirectory)

        showDirs: false
        showFiles: true

        nameFilters: ["*.jpg", "*.jpeg", "*.png", "*.webp"]

        sortField: FolderListModel.Name
        sortReversed: false
    }

    function refresh() {
        model.folder = Qt.url("");
        model.folder = Qt.url(wallpaperModel.wallpaperDirectory);
    }
}
