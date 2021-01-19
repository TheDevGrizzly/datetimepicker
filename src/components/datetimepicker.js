import Params from '../utilities/params';
import MonthSelect from './monthselect';
import YearSelect from './yearselect';
import DateSelect from './dateselect';
import TimeInput from './timeinput';

class DateTimePicker {
    constructor(params) {
        this.params = new Params(params);
        this.monthSelect = new MonthSelect(this.params);
        this.yearSelect = new YearSelect(this.params);
        this.dateSelect = new DateSelect(this.params);
        this.timeInput = new TimeInput(this.params);
    }

    set monthSelect(monthSelect) {
        this.monthSelect = monthSelect;
    }

    get monthSelect() {
        return this.monthSelect;
    }

    set yearSelect(yearSelect) {
        this.yearSelect = yearSelect;
    }

    get yearSelect() {
        return this.yearSelect;
    }

    set dateSelect(dateSelect) {
        this.dateSelect = dateSelect;
    }

    get dateSelect() {
        return this.dateSelect;
    }

    set timeInput(timeInput) {
        this.timeInput = timeInput;
    }

    get timeInput() {
        return this.timeInput;
    }
}

export default DateTimePicker;
