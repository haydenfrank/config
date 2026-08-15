// Time.qml
pragma Singleton

import Quickshell
import QtQuick

Singleton {
    readonly property string time: {
        Qt.formatDateTime(clock.date, "h:mm AP");
    }
    readonly property string date: {
        var day = clock.date.getDate();
        var weekdayMonth = Qt.formatDateTime(clock.date, "dddd, MMMM");
        return weekdayMonth + " " + day + ordinalSuffix(day);
    }

    function ordinalSuffix(day) {
        if (day % 10 === 1 && day !== 11)
            return "st";
        if (day % 10 === 2 && day !== 12)
            return "nd";
        if (day % 10 === 3 && day !== 13)
            return "rd";
        return "th";
    }

    SystemClock {
        id: clock
        precision: SystemClock.Seconds
    }
}
