import Params from '../utilities/params';
import TimeInput from './timeinput';

class TimePicker {
    constructor(params) {
        this.params = new Params(params);
        this.timeInput = new TimeInput(params);
    }

    set timeInput(timeInput) {
        this.timeInput = timeInput;
    }

    get timeInput() {
        return this.timeInput;
    }
}

export default TimePicker;
