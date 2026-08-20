// shell.qml
import Quickshell
import QtQml
import qs.components.Bar
import qs.components.IPC
import qs.components.Wallpaper

Scope {
    Bar {}
    IPC {}
    Wallpaper {
        id: wallpaper
    }
}
