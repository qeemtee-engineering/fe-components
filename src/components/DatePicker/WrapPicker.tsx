import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import classNames from 'classnames';
import * as moment from 'moment';
import interopDefault from '../utils/interopDefault';
import { generateShowHourMinuteSecond } from '../TimePicker';
import warning from '../utils/warning';

type PickerType = 'date' | 'week' | 'month';

interface PickerMap {
  [name: string]: string;
}

const DEFAULT_FORMAT: PickerMap = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  week: 'gggg-wo',
  month: 'YYYY-MM',
};

function getColumns({ showHour, showMinute, showSecond, use12Hours }: any) {
  let column = 0;
  if (showHour) {
    column += 1;
  }
  if (showMinute) {
    column += 1;
  }
  if (showSecond) {
    column += 1;
  }
  if (use12Hours) {
    column += 1;
  }
  return column;
}

function checkValidate(value: any, propName: string) {
  const values: any[] = Array.isArray(value) ? value : [value];
  values.forEach(val => {
    if (!val) return;

    warning(
      !interopDefault(moment).isMoment(val) || val.isValid(),
      'DatePicker',
      `\`${propName}\` provides invalidate moment time. If you want to set empty value, use \`null\` instead.`
    );
  });
}

export default function WrapPicker(Picker: React.ComponentClass<any>, pickerType: PickerType): any {
  class PickerWrapper extends React.Component<any, any> {
    static defaultProps = {
      transitionName: 'slide-up',
      popupStyle: {},
      onChange() {},
      onOk() {},
      onOpenChange() {},
      locale: {},
    };

    static getDerivedStateFromProps({ value, defaultValue }: any) {
      checkValidate(defaultValue, 'defaultValue');
      checkValidate(value, 'value');
      return {};
    }

    // Since we need call `getDerivedStateFromProps` for check. Need leave an empty `state` here.
    state = {};

    private picker: any;

    componentDidMount() {
      const { autoFocus, disabled } = this.props;
      if (autoFocus && !disabled) {
        this.focus();
      }
    }

    savePicker = (node: any) => {
      this.picker = node;
    };

    getDefaultLocale = () => {
      const result = {
        ...this.props.locale,
      };
      result.lang = {
        ...result.lang,
        ...(this.props.locale || {}).lang,
      };
      return result;
    };

    handleOpenChange = (open: boolean) => {
      const { onOpenChange } = this.props;
      onOpenChange(open);
    };

    handleFocus: React.FocusEventHandler<HTMLInputElement> = e => {
      const { onFocus } = this.props;
      if (onFocus) {
        onFocus(e);
      }
    };

    handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
      const { onBlur } = this.props;
      if (onBlur) {
        onBlur(e);
      }
    };

    handleMouseEnter: React.MouseEventHandler<HTMLInputElement> = e => {
      const { onMouseEnter } = this.props;
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    handleMouseLeave: React.MouseEventHandler<HTMLInputElement> = e => {
      const { onMouseLeave } = this.props;
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    };

    focus() {
      this.picker.focus();
    }

    blur() {
      this.picker.blur();
    }

    renderPicker = () => {
      const { format, showTime } = this.props;
      const mergedPickerType = showTime ? `${pickerType}Time` : pickerType;
      const mergedFormat = format || DEFAULT_FORMAT[mergedPickerType];

      const { getCalendarContainer, size, disabled } = this.props;
      const getPopupContainer = getCalendarContainer;
      const pickerClass = classNames(`DatePicker-picker`, {
        [`DatePicker-picker-${size}`]: !!size,
      });
      const pickerInputClass = classNames(`DatePicker-picker-input`, {
        [`DatePicker-picker-input-lg`]: size === 'large',
        [`DatePicker-picker-input-sm`]: size === 'small',
        [`DatePicker-picker-input-disabled`]: disabled,
      });

      const timeFormat = (showTime && showTime.format) || 'HH:mm:ss';
      const rcTimePickerProps = {
        ...generateShowHourMinuteSecond(timeFormat),
        format: timeFormat,
        use12Hours: showTime && showTime.use12Hours,
      };
      const columns = getColumns(rcTimePickerProps);
      const timePickerCls = `DatePicker-time-picker-column-${columns}`;
      const timePicker = showTime ? (
        <TimePickerPanel
          {...rcTimePickerProps}
          {...showTime}
          prefixCls="DatePicker-time-picker"
          className={timePickerCls}
          placeholder="Select Time"
          transitionName="slide-up"
        />
      ) : null;

      return (
        <Picker
          {...this.props}
          getCalendarContainer={getPopupContainer}
          format={mergedFormat}
          ref={this.savePicker}
          pickerClass={pickerClass}
          pickerInputClass={pickerInputClass}
          timePicker={timePicker}
          onOpenChange={this.handleOpenChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    };

    render() {
      return this.renderPicker();
    }
  }

  polyfill(PickerWrapper);
  return PickerWrapper;
}
