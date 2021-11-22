import RcCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import * as React from 'react';

import { DatePickerDecorator, DatePickerProps } from '../interfaces';
import CreatePicker from './CreatePicker';
import './DatePicker.scss';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';
import WrapPicker from './WrapPicker';

const DatePicker = WrapPicker(
  CreatePicker(RcCalendar),
  'date'
) as React.ClassicComponentClass<DatePickerProps>;

const MonthPicker = WrapPicker(CreatePicker(MonthCalendar), 'month');

Object.assign(DatePicker, {
  RangePicker: WrapPicker(RangePicker, 'date'),
  MonthPicker,
  WeekPicker: WrapPicker(WeekPicker, 'week'),
});

export default DatePicker as DatePickerDecorator;
