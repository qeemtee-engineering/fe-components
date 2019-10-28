import * as React from 'react';
import * as moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from '../Icon';

import warning from '../utils/warning';
import interopDefault from '../utils/interopDefault';
import { getDataOrAriaProps } from '../utils';
import { formatDate } from './utils';

export interface PickerProps {
  value?: moment.Moment;
  open?: boolean;
  prefixCls: string;
}

export interface PickerState {
  open: boolean;
  value: moment.Moment | null;
  showDate: moment.Moment | null;
}

export default function createPicker(TheCalendar: React.ComponentClass): any {
  class CalenderWrapper extends React.Component<any, PickerState> {
    static defaultProps = {
      allowClear: true,
      showToday: true,
    };

    static getDerivedStateFromProps(nextProps: PickerProps, prevState: PickerState) {
      const state: Partial<PickerState> = {};
      let { open } = prevState;

      if ('open' in nextProps) {
        state.open = nextProps.open;
        open = nextProps.open || false;
      }
      if ('value' in nextProps) {
        state.value = nextProps.value;
        if (
          nextProps.value !== prevState.value ||
          (!open && nextProps.value !== prevState.showDate)
        ) {
          state.showDate = nextProps.value;
        }
      }
      return Object.keys(state).length > 0 ? state : null;
    }

    private input: any;

    private prefixCls?: string;

    constructor(props: any) {
      super(props);
      const value = props.value || props.defaultValue;
      if (value && !interopDefault(moment).isMoment(value)) {
        throw new Error(
          'The value/defaultValue of DatePicker or MonthPicker must be ' +
            'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value'
        );
      }
      this.state = {
        value,
        showDate: value,
        open: false,
      };
    }

    componentDidUpdate(_: PickerProps, prevState: PickerState) {
      if (!('open' in this.props) && prevState.open && !this.state.open) {
        this.focus();
      }
    }

    saveInput = (node: any) => {
      this.input = node;
    };

    clearSelection = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleChange(null);
    };

    handleChange = (value: moment.Moment | null) => {
      const { props } = this;
      if (!('value' in props)) {
        this.setState({
          value,
          showDate: value,
        });
      }
      props.onChange(value, formatDate(value, props.format));
    };

    handleCalendarChange = (value: moment.Moment) => {
      this.setState({ showDate: value });
    };

    handleOpenChange = (open: boolean) => {
      const { onOpenChange } = this.props;
      if (!('open' in this.props)) {
        this.setState({ open });
      }

      if (onOpenChange) {
        onOpenChange(open);
      }
    };

    focus() {
      this.input.focus();
    }

    blur() {
      this.input.blur();
    }

    renderFooter = (...args: any[]) => {
      const { renderExtraFooter } = this.props;
      const { prefixCls } = this;
      return renderExtraFooter ? (
        <div className={`${prefixCls}-footer-extra`}>{renderExtraFooter(...args)}</div>
      ) : null;
    };

    renderPicker = () => {
      const { value, showDate, open } = this.state;
      const props = omit(this.props, ['onChange']);

      const prefixCls = 'DatePicker';
      // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397
      this.prefixCls = prefixCls;

      const placeholder = 'placeholder' in props ? props.placeholder : 'Select Date';

      const disabledTime = props.showTime ? props.disabledTime : null;

      const calendarClassName = classNames({
        [`${prefixCls}-time`]: props.showTime,
        [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
      });

      let pickerProps: Object = {};
      let calendarProps: any = {};
      const pickerStyle: { minWidth?: number } = {};
      if (props.showTime) {
        calendarProps = {
          // fix https://github.com/ant-design/ant-design/issues/1902
          onSelect: this.handleChange,
        };
        pickerStyle.minWidth = 195;
      } else {
        pickerProps = {
          onChange: this.handleChange,
        };
      }
      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      warning(
        !('onOK' in props),
        'DatePicker',
        'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!'
      );
      const calendar = (
        <TheCalendar
          {...calendarProps}
          disabledDate={props.disabledDate}
          disabledTime={disabledTime}
          timePicker={props.timePicker}
          defaultValue={props.defaultPickerValue || interopDefault(moment)()}
          dateInputPlaceholder={placeholder}
          prefixCls={prefixCls}
          className={calendarClassName}
          onOk={props.onOk}
          dateRender={props.dateRender}
          format={props.format}
          showToday={props.showToday}
          monthCellContentRender={props.monthCellContentRender}
          renderFooter={this.renderFooter}
          onPanelChange={props.onPanelChange}
          onChange={this.handleCalendarChange}
          value={showDate}
        />
      );

      const clearIcon =
        !props.disabled && props.allowClear && value ? (
          <Icon
            icon="close"
            className={`${prefixCls}-picker-clear`}
            onClick={this.clearSelection}
          />
        ) : null;

      const inputIcon = (
        <Icon
          icon="calendar_today"
          className={`${prefixCls}-picker-icon ${prefixCls}-picker-icon-calendar`}
        />
      );

      const dataOrAriaProps = getDataOrAriaProps(props);
      const input = ({ value: inputValue }: { value: moment.Moment | null }) => (
        <div>
          <input
            ref={this.saveInput}
            disabled={props.disabled}
            readOnly
            value={formatDate(inputValue, props.format)}
            placeholder={placeholder}
            className={props.pickerInputClass}
            tabIndex={props.tabIndex}
            name={props.name}
            {...dataOrAriaProps}
          />
          {clearIcon}
          {inputIcon}
        </div>
      );

      return (
        <span
          id={props.id}
          className={classNames(props.className, props.pickerClass)}
          style={{ ...pickerStyle, ...props.style }}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          <RcDatePicker
            {...props}
            {...pickerProps}
            calendar={calendar}
            value={value}
            prefixCls={`${prefixCls}-picker-container`}
            style={props.popupStyle}
            open={open}
            onOpenChange={this.handleOpenChange}
          >
            {input}
          </RcDatePicker>
        </span>
      );
    };

    render() {
      return this.renderPicker();
    }
  }
  polyfill(CalenderWrapper);

  return CalenderWrapper;
}
