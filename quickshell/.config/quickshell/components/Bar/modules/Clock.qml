import QtQuick
import "../../Services"

Text {
    font.family: "SF Pro Text"
    font.styleName: "Medium"
    font.bold: true
    font.pixelSize: 16
    color: colors.on_surface_variant
    text: Time.time
}
