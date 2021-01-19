class TimeInput {
    constructor(params) {
        this.setFormat(params.time_format);
        this.guessSeparator();
        this.setHour(params.default_hour);
        this.setMinute(params.default_minute);
    }

    set format(format) {
        this.format = format;
    }

    get format() {
        return this.format;
    }

    guessSeparator() {
        this.separator = this.format.includes('h') ? 'h' : ':';
    }

    set separator(separator) {
        this.separator = separator;
    }

    get separator() {
        return this.separator;
    }

    set value(value) {
        [hour, minute] = this.value.split(this.separator);

        this.value = value;
        this.hour = parseInt(hour);
        this.minute = parseInt(minute);
    }

    get value() {
        return this.value;
    }

    set hour(hour) {
        this.hour = parseInt(hour);
    }

    get hour() {
        return this.hour;
    }

    set minute(minute) {
        this.minute = parseInt(minute);
    }

    get minute() {
        return this.minute;
    }
}

export default TimeInput;
