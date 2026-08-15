import QtQuick
import qs.components.Services
import qs.components.Bar.modules

Text {
    id: clockModule
    property var time: Time.time
    property var date: Time.date
    font.family: "SF Pro Text"
    font.styleName: "Medium"
    font.bold: true
    font.pixelSize: 16
    color: colors.on_surface_variant
    text: time
    ClockPopup {
        id: clockPopup
        clockModule: clockModule
    }
    MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: {
            cursorShape = Qt.PointingHandCursor;
            clockPopup.toggle();
        }
        onExited: {
            clockPopup.toggle();
        }
    }
}
