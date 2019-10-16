import * as React from 'react';
import RcCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import CreatePicker from './CreatePicker';
import WrapPicker from './WrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import { DatePickerProps, DatePickerDecorator } from 'interfaces';
import './DatePicker.scss';

const DatePicker = WrapPicker(CreatePicker(RcCalendar), 'date') as React.ClassicComponentClass<
  DatePickerProps
>;

const MonthPicker = WrapPicker(CreatePicker(MonthCalendar), 'month');

Object.assign(DatePicker, {
  RangePicker: WrapPicker(RangePicker, 'date'),
  MonthPicker,
  WeekPicker: WrapPicker(WeekPicker, 'week'),
});

export default DatePicker as DatePickerDecorator;
