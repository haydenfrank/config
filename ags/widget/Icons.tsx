import { Gtk, Gdk } from "ags/gtk4"

const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default()!)
export const getAppIcon = (appClass: string) => {
  const icon = iconTheme.lookup_icon(
    appClass,
    null,
    48,
    1,
    Gtk.TextDirection.NONE,
    0,
  )
  return icon?.get_file()?.get_path() ?? null
}
