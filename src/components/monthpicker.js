import Params from '../utilities/params';
import YearSelect from './yearselect';
import MonthInput from './monthinput';

class MonthPicker {
    constructor(params) {
        this.params = new Params(params);
        this.yearSelect = new YearSelect(this.params);
        this.monthInput = new MonthInput(this.params);
    }

    set yearSelect(yearSelect) {
        this.yearSelect = yearSelect;
    }

    get yearSelect() {
        return this.yearSelect;
    }

    set monthInput(monthInput) {
        this.monthInput = monthInput;
    }

    get monthInput() {
        return this.monthInput;
    }
}

export default MonthPicker;
