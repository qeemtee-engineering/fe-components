import * as React from 'react';
import * as moment from 'moment';
import omit from 'omit.js';
import { polyfill } from 'react-lifecycles-compat';
import RcTimePicker from 'rc-time-picker/lib/TimePicker';
import classNames from 'classnames';
import warning from '../utils/warning';
import interopDefault from '../utils/interopDefault';
import Icon from '../Icon';
import './TimePicker.scss';
import { TimePickerProps } from 'interfaces';

export function generateShowHourMinuteSecond(format: string) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1,
  };
}

class TimePicker extends React.Component<TimePickerProps, any> {
  static defaultProps = {
    align: {
      offset: [0, -2],
    },
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true,
  };

  static getDerivedStateFromProps(nextProps: TimePickerProps) {
    if ('value' in nextProps) {
      return { value: nextProps.value };
    }
    return null;
  }

  private timePickerRef: typeof RcTimePicker;

  constructor(props: TimePickerProps) {
    super(props);
    const value = props.value || props.defaultValue;
    if (value && !interopDefault(moment).isMoment(value)) {
      throw new Error(
        'The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' +
          'see: https://u.ant.design/time-picker-value'
      );
    }
    this.state = {
      value,
    };

    warning(
      !('allowEmpty' in props),
      'TimePicker',
      '`allowEmpty` is deprecated. Please use `allowClear` instead.'
    );
  }

  getDefaultFormat() {
    const { format, use12Hours } = this.props;
    if (format) {
      return format;
    }
    if (use12Hours) {
      return 'h:mm:ss a';
    }
    return 'HH:mm:ss';
  }

  getAllowClear() {
    const { allowClear, allowEmpty } = this.props;
    if ('allowClear' in this.props) {
      return allowClear;
    }
    return allowEmpty;
  }

  handleOpenClose = ({ open }: { open: boolean }) => {
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  saveTimePicker = (timePickerRef: typeof RcTimePicker) => {
    this.timePickerRef = timePickerRef;
  };

  handleChange = (value: moment.Moment) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    const { onChange, format = 'HH:mm:ss' } = this.props;
    if (onChange) {
      onChange(value, (value && value.format(format)) || '');
    }
  };

  focus() {
    this.timePickerRef.focus();
  }

  blur() {
    this.timePickerRef.blur();
  }

  renderInputIcon(prefixCls: string) {
    const clockIcon = <Icon icon="access_time" className={`${prefixCls}-clock-icon`} />;

    return <span className={`${prefixCls}-icon`}>{clockIcon}</span>;
  }

  renderClearIcon(prefixCls: string) {
    const clearIconPrefixCls = `${prefixCls}-clear`;
    return <Icon icon="access_time" className={clearIconPrefixCls} />;
  }

  renderTimePicker = () => {
    const {
      className,
      addon,
      placeholder,
      ...props
    } = this.props;
    const pickerProps = omit(props, ['defaultValue', 'allowEmpty', 'allowClear']);

    const format = this.getDefaultFormat();
    const pickerClassName = classNames(className);

    const pickerAddon = (panel: React.ReactElement<any>) =>
      addon ? <div className={`TimePicker-panel-addon`}>{addon(panel)}</div> : null;

    return (
      <RcTimePicker
        {...generateShowHourMinuteSecond(format)}
        {...pickerProps}
        allowEmpty={this.getAllowClear()}
        prefixCls="TimePicker"
        ref={this.saveTimePicker}
        format={format}
        className={pickerClassName}
        value={this.state.value}
        placeholder={placeholder ? placeholder : 'Select Time'}
        onChange={this.handleChange}
        onOpen={this.handleOpenClose}
        onClose={this.handleOpenClose}
        addon={pickerAddon}
        inputIcon={this.renderInputIcon('TimePicker')}
        clearIcon={this.renderClearIcon('TimePicker')}
      />
    );
  };

  render() {
    return this.renderTimePicker();
  }
}

polyfill(TimePicker);

export default TimePicker;
