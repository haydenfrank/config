import { Astal } from "ags/gtk4"
import { Workspaces } from "./Workspaces"
import { Network } from "./Network"
import { Gtk } from "ags/gtk4"
import { Clock } from "./Clock"

export default function Bar() {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  return (
    <window
      visible
      anchor={TOP | LEFT | RIGHT}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      class="bar"
    >
      <box halign={Gtk.Align.CENTER}>
        <Clock />
        <Workspaces />
        <Network />
      </box>
    </window>
  )
}
