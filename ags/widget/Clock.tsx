import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"

export const Clock = () => {
  const time = createPoll("", 1000, () =>
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    }),
  )

  const date = createPoll("", 60 * 1000, () =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date()),
  )

  return (
    <button hexpand halign={Gtk.Align.CENTER} tooltipText={date} class="clock">
      <label label={time} />
    </button>
  )
}
