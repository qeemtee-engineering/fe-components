import RcCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import CreatePicker from './CreatePicker';
import './DatePicker.css';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import WrapPicker from './WrapPicker';
const DatePicker = WrapPicker(CreatePicker(RcCalendar), 'date');
const MonthPicker = WrapPicker(CreatePicker(MonthCalendar), 'month');
Object.assign(DatePicker, {
    RangePicker: WrapPicker(RangePicker, 'date'),
    MonthPicker,
    WeekPicker: WrapPicker(WeekPicker, 'week'),
});
export default DatePicker;
//# sourceMappingURL=index.js.map