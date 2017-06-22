export default class DateUtil {

    /**
     * Convert seconds to format (hour:minutes:seconds)
     * @param secs
     * @param showSeconds
     * @returns {string}
     */
    secondsToTime(secs:any, showSeconds:boolean = false) {
        let hours: any = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes: any = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds: any = Math.ceil(divisor_for_seconds);
        //Set data
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let time: any = hours + ':' + minutes;
        time = (showSeconds) ? time + ':' + seconds : time;
        return time;
    }

    /**
     * Convert time format (hour:minutes:seconds) to seconds
     * @param time
     * @param padSeconds
     * @returns {any}
     */
    stringToSeconds(time:string, padSeconds:boolean) {
        if (time) {
            if (padSeconds) {
                time += ":00";
            }
            var sep1 = time.indexOf(":");
            var sep2 = time.lastIndexOf(":");
            var hour = time.substr(0, sep1);
            var min = time.substr(sep1 + 1, sep2 - sep1 - 1);
            var sec = time.substr(sep2 + 1);
            return (Number(sec) + (Number(min) * 60) + (Number(hour) * 3600));
        }

        return null;
    }
}