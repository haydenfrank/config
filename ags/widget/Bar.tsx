import { createBinding, For, With } from "ags"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import AstalHyprland from "gi://AstalHyprland"

const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default()!)
const hyprland = AstalHyprland.get_default()
const workspaces = createBinding(hyprland, "workspaces")
const clients = createBinding(hyprland, "clients")

const getAppIcon = (appClass: string) => {
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

export default function Bar() {
  return (
    <window
      visible
      anchor={TOP | LEFT | RIGHT}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
    >
      <box hexpand halign={Gtk.Align.CENTER}>
        <For each={workspaces}>
          {(ws) =>
            <button
              onClicked={() =>
                hyprland.dispatch("workspace", ws.id.toString())
              }
            >
              <label label={ws.id.toString()} />
              <With value={clients}>
                {(cs) => {
                  const first = cs.find((c) => c.workspace?.id === ws.id)

                  return first ? (
                    <image file={getAppIcon(first.class)!} />
                  ) : (<label label={ws.id.toString()} />)
                }}
              </With>
            </button>
          }
        </For>
      </box>
    </window>
  )
}
