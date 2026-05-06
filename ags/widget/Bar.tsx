import { createBinding, For } from "ags"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import AstalHyprland from "gi://AstalHyprland"

const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default()!)
const hyprland = AstalHyprland.get_default()
const workspaces = createBinding(hyprland, "workspaces")
const refresh = createBinding(hyprland, "clients")

const activeWorkspaces = refresh.as(() => {
  const wss = hyprland.get_workspaces()
  return wss.filter((ws) => ws.id > 0).sort((a, b) => a.id - b.id)
})

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
    <window visible anchor={TOP | LEFT | RIGHT}>
      <box hexpand halign={Gtk.Align.CENTER}>
        <For each={activeWorkspaces}>
          {(ws) =>
            ws.id > 0 ? (
              <button
                onClicked={() =>
                  hyprland.dispatch("workspace", ws.id.toString())
                }
              >
                <label label={ws.id.toString()} />
                {ws.clients.at(0) && (
                  <image file={getAppIcon(ws.clients.at(0)!.class ?? "")!} />
                )}
              </button>
            ) : (
              <button sensitive={false}>
                <label label="•" />
              </button>
            )
          }
        </For>
      </box>
    </window>
  )
}
