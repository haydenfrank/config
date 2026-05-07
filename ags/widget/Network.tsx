import AstalNetwork from "gi://AstalNetwork"
import { Gtk } from "ags/gtk4"
import { createBinding } from "ags"
import { execAsync } from "ags/process"

export const Network = () => {
	const network = AstalNetwork.get_default()
	const wifi = createBinding(network, "wifi")
	const icon = wifi.as((w) => {
		const s = w?.get_strength?.() ?? 0

		if (s > 75) return "󰤨"
		if (s > 50) return "󰤥"
		if (s > 25) return "󰤢"
		if (s > 0) return "󰤟"
		return "󰤯"
	})
	const tooltip = wifi.as((w) => {
		const ssid = w?.ssid ?? w?.get_ssid?.() ?? "Disconnected"
		const strength = w?.get_strength?.() ?? 0

		return `${ssid} (${strength})`
	})
	const openEditor = () => {
		execAsync(["nm-connection-editor"]).catch(console.error)
	}
	return (
		<box hexpand halign={Gtk.Align.CENTER}>
			<button onClicked={openEditor} tooltipText={tooltip}>
				<label label={icon} />
			</button>
		</box>
	)
}

