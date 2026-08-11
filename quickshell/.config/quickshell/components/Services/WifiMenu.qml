pragma Singleton

import Quickshell
import Quickshell.Io

Singleton {
    id: root

    property int cursorX: 0
    property int cursorY: 0

    function toggle() {
        cursorProc.running = true;
    }

    IpcHandler {
        target: "WifiMenu"
        function toggle(): void {
            root.toggle();
        }
    }

    Process {
        id: cursorProc
        command: ["hyprctl", "cursorpos"]
        stdout: StdioCollector {
            onStreamFinished: {
                const parts = text.trim().split(",").map(s => s.trim());
                if (parts.length !== 2) {
                    console.warn("nm-sidebar: unexpected cursorpos output:", text);
                    return;
                }
                root.cursorX = parseInt(parts[0], 10);
                root.cursorY = parseInt(parts[1], 10);
                monitorsProc.running = true;
            }
        }
    }

    Process {
        id: monitorsProc
        command: ["hyprctl", "monitors", "-j"]
        stdout: StdioCollector {
            onStreamFinished: {
                let monitors;
                try {
                    monitors = JSON.parse(text);
                } catch (e) {
                    console.warn("nm-sidebar: failed to parse hyprctl monitors JSON:", e);
                    return;
                }

                const monitor = monitors.find(m => root.cursorX >= m.x && root.cursorX < (m.x + m.width) && root.cursorY >= m.y && root.cursorY < (m.y + m.height));

                if (!monitor) {
                    console.warn("nm-sidebar: could not determine monitor under cursor");
                    return;
                }

                launchProc.command = ["env", "NM_SIDEBAR_OUTPUT=" + monitor.name, "nm-sidebar", "--toggle"];
                launchProc.running = true;
            }
        }
    }

    Process {
        id: launchProc
    }
}
