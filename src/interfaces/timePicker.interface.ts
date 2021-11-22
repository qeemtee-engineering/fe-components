import moment from 'moment';
import React from 'react';

export interface TimePickerLocale {
  placeholder: string;
}

export interface TimePickerProps {
  className?: string;
  value?: moment.Moment;
  defaultValue?: moment.Moment | moment.Moment[];
  open?: boolean;
  format?: string;
  onChange?: (time: moment.Moment, timeString: string) => void;
  onOpenChange?: (open: boolean) => void;
  onAmPmChange?: (ampm: 'AM' | 'PM') => void;
  disabled?: boolean;
  placeholder?: string;
  hideDisabledOptions?: boolean;
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
  style?: React.CSSProperties;
  addon?: Function;
  use12Hours?: boolean;
  focusOnOpen?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  allowEmpty?: boolean;
  allowClear?: boolean;
  inputReadOnly?: boolean;
  clearText?: string;
  defaultOpenValue?: moment.Moment;
}
