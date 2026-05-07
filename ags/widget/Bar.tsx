import { createBinding, For, With } from "ags"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import AstalHyprland from "gi://AstalHyprland"

const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default()!)
const hyprland = AstalHyprland.get_default()
const workspaces = createBinding(hyprland, "workspaces")
  .as((wss) =>
    wss
      .filter((ws) => ws.id > 0)
      .sort((a, b) => a.id - b.id)
  )
const paddedWorkspaces = workspaces.as((wss) => {
  const maxId = Math.max(...wss.map((ws) => ws.id), 5)
  const padded = []
  for (let i = 1; i <= maxId; i++) {
    const ws = wss.find((ws) => ws.id === i)
    if (ws) {
      padded.push(ws)
    } else {
      padded.push({ id: i, name: "", clients: [] })
    }
  }
  return padded
})
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
        <For each={paddedWorkspaces}>
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
