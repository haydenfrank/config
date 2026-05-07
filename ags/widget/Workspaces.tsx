import { getAppIcon } from "./Icons"
import { Gtk } from "ags/gtk4"
import AstalHyprland from "gi://AstalHyprland"
import { createBinding, For, With } from "ags"

export const Workspaces = () => {
  const hyprland = AstalHyprland.get_default()
  const workspaces = createBinding(hyprland, "workspaces").as((wss) =>
    wss.filter((ws) => ws.id > 0).sort((a, b) => a.id - b.id),
  )
  const clients = createBinding(hyprland, "clients")
  const paddedWorkspaces = workspaces.as((wss) => {
    const maxId = Math.max(...wss.map((ws) => ws.id), 5)
    const padded = []
    for (let i = 1; i <= 5; i++) {
      const ws = wss.find((ws) => ws.id === i)
      if (ws) {
        padded.push(ws)
      } else {
        padded.push({ id: i, name: "", clients: [] })
      }
    }
    if (maxId > 5) {
      padded.push({ id: maxId, name: "", clients: [] })
    }
    return padded
  })

  return (
    <box hexpand halign={Gtk.Align.CENTER}>
      <For each={paddedWorkspaces}>
        {(ws) => (
          <button
            onClicked={() => hyprland.dispatch("workspace", ws.id.toString())}
          >
            <With value={clients}>
              {(cs) => {
                const first = cs.find((c) => c.workspace?.id === ws.id)

                return (
                  <box spacing={6} halign={Gtk.Align.CENTER}>
                    <image
                      visible={!!first}
                      file={first ? getAppIcon(first.class)! : undefined}
                    />
                    <label label={ws.id.toString()} />
                  </box>
                )
              }}
            </With>
          </button>
        )}
      </For>
    </box>
  )
}
