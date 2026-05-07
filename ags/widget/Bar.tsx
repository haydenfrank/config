import { Astal } from "ags/gtk4"
import { Workspaces } from "./Workspaces"

export default function Bar() {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  return (
    <window
      visible
      anchor={TOP | LEFT | RIGHT}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      class="Bar"
    >
      <Workspaces />
    </window>
  )
}
