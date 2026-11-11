import Quickshell
import Quickshell.Io
import Quickshell.Hyprland
import Quickshell.Services.Pam
import Quickshell.Wayland
import QtQml
import QtQuick
import qs.components.Bar
import qs.components.Bar.modules
import qs.components.Lock
import qs.components.Wallpaper

ShellRoot {
    id: root

    property bool lockRequested: false
    property bool fadingOut: false
    property string statusText: "Input Password or Scan Fingerprint..."
    property bool statusIsError: false
    property string colorText: ""
    property string wallpaperPath: ""
    property string lockScreenName: ""
    property string passwordText: ""

    function color(name, fallback) {
        const match = new RegExp("^\\$" + name + "\\s*=\\s*rgba\\(([0-9a-fA-F]{8})\\)", "m").exec(root.colorText);
        return match ? "#" + match[1].slice(0, 6) : fallback;
    }

    function value(name, fallback) {
        const match = new RegExp("^\\$" + name + "\\s*=\\s*(.+)$", "m").exec(root.colorText);
        return match ? match[1].trim() : fallback;
    }

    function beginAuthentication() {
        root.statusText = "Input Password or Scan Fingerprint...";
        root.statusIsError = false;

        if (pam.active)
            pam.abort();

        Qt.callLater(function () {
            if (root.lockRequested && !pam.active)
                pam.start();
        });
    }

    function submitPassword(password) {
        if (password === "")
            return;

        root.passwordText = "";

        if (pam.responseRequired) {
            pam.respond(password);
        } else if (!pam.active) {
            beginAuthentication();
        }
    }

    function requestLock() {
        if (!root.lockRequested) {
            const focusedMonitor = Hyprland.focusedMonitor;
            root.lockScreenName = focusedMonitor?.name
                ?? Quickshell.screens[0]?.name
                ?? "";
            root.lockRequested = true;
            root.beginAuthentication();
        }
    }

    Scope {
        Bar {}
        Notifications {}
        Wallpaper {}
    }

    FileView {
        id: colorsFile

        path: Quickshell.env("HOME") + "/.config/hypr/colors.conf"
        printErrors: false

        onLoaded: {
            root.colorText = colorsFile.text();
            root.wallpaperPath = root.value("image", "");
        }
    }

    Image {
        id: wallpaperCache

        source: root.wallpaperPath
        asynchronous: false
        cache: true
        sourceSize.width: 2560
        width: 1
        height: 1
        opacity: 0
    }

    PamContext {
        id: pam

        config: "system-local-login"

        onPamMessage: {
            if (pam.responseRequired) {
                root.statusText = pam.responseVisible
                    ? "Input Password or Scan Fingerprint..."
                    : pam.message;
                root.statusIsError = pam.messageIsError;
            } else if (pam.message !== "") {
                root.statusText = pam.message;
                root.statusIsError = pam.messageIsError;
            }
        }

        onCompleted: function (result) {
            if (result === PamResult.Success) {
                root.fadingOut = true;
                unlockTimer.start();
            } else {
                root.statusText = result === PamResult.MaxTries
                    ? "Authentication temporarily unavailable"
                    : "Authentication failed";
                root.statusIsError = true;
            }
        }

        onError: function (error) {
            root.statusText = "Authentication error";
            root.statusIsError = true;
        }
    }

    WlSessionLock {
        id: sessionLock

        locked: root.lockRequested

        onSecureChanged: {
            if (secure)
                root.beginAuthentication();
        }

        WlSessionLockSurface {
            id: lockSurface

            color: "transparent"

            Lockscreen {
                anchors.fill: parent

                primary: Quickshell.screens.length === 1
                    || lockSurface.screen?.name === root.lockScreenName
                fadingOut: root.fadingOut
                wallpaper: root.wallpaperPath
                passwordText: root.passwordText
                timeColor: root.color("on_surface", "#dee3e6")
                dateColor: root.color("on_surface_variant", "#bfc8cc")
                accentColor: root.color("secondary", "#b3cad4")
                borderColor: root.color("outline_variant", "#40484b")
                fieldColor: root.color("surface_container_high", "#292f31")
                errorColor: root.color("error", "#ffb4ab")
                statusText: root.statusText
                statusIsError: root.statusIsError

                onPasswordSubmitted: function (password) {
                    root.submitPassword(password);
                }
                onPasswordEdited: function (password) {
                    root.passwordText = password;
                }
                onPowerAction: function (action) {
                    powerProcess.command = action === "shutdown"
                        ? ["shutdown", "-P", "now"]
                        : action === "reboot"
                            ? ["systemctl", "reboot"]
                            : ["systemctl", "suspend"];
                    powerProcess.running = true;
                }
            }
        }
    }

    Process {
        id: powerProcess
    }

    Timer {
        id: unlockTimer

        interval: 250
        repeat: false

        onTriggered: {
            root.lockRequested = false;
            root.fadingOut = false;
        }
    }

    IpcHandler {
        target: "lockScreen"

        function lock() {
            root.requestLock();
        }
    }

    Component.onCompleted: {
        colorsFile.reload();
    }
}
