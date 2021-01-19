class Params {
    constructor(params) {
        this.week_start = params.week_start ? params.week_start : 'sunday';
        this.this.date_format = params.date_format
            ? params.date_format
            : 'Y-m-d';
        this.default_date = params.default_date
            ? params.default_date instanceof Date
                ? params.default_date
                : new Date(params.default_date)
            : new Date();
        this.disable_dates = params.disable_dates ? params.disable_dates : [];
        this.min_date = params.min_date ? params.min_date : null;
        this.max_date = params.max_date ? params.max_date : null;
        this.time_24h = params.time_24h ? params.time_24h : false;
        this.time_format = params.time_format ? params.time_format : 'H:i';
        this.default_hour = params.default_hour ? params.default_hour : 12;
        this.default_minute = params.default_minute ? params.default_minute : 0;
        this.hour_increment = params.hour_increment ? params.hour_increment : 1;
        this.minute_increment = params.minute_increment
            ? params.minute_increment
            : 1;
    }
}

export default Params;
