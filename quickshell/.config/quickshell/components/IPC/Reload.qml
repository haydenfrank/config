import Quickshell
import Quickshell.Io

IpcHandler {
    target: "bar"

    function refresh(): void {
        Quickshell.reload(false);
    }
}
