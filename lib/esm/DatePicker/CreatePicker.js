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
export default function createPicker(TheCalendar) {
    class CalenderWrapper extends React.Component {
        constructor(props) {
            super(props);
            this.saveInput = (node) => {
                this.input = node;
            };
            this.clearSelection = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleChange(null);
            };
            this.handleChange = (value) => {
                const { props } = this;
                if (!('value' in props)) {
                    this.setState({
                        value,
                        showDate: value,
                    });
                }
                props.onChange(value, formatDate(value, props.format));
            };
            this.handleCalendarChange = (value) => {
                this.setState({ showDate: value });
            };
            this.handleOpenChange = (open) => {
                const { onOpenChange } = this.props;
                if (!('open' in this.props)) {
                    this.setState({ open });
                }
                if (onOpenChange) {
                    onOpenChange(open);
                }
            };
            this.renderFooter = (...args) => {
                const { renderExtraFooter } = this.props;
                const { prefixCls } = this;
                return renderExtraFooter ? (React.createElement("div", { className: `${prefixCls}-footer-extra` }, renderExtraFooter(...args))) : null;
            };
            this.renderPicker = () => {
                const { value, showDate, open } = this.state;
                const props = omit(this.props, ['onChange']);
                const prefixCls = 'DatePicker';
                this.prefixCls = prefixCls;
                const placeholder = 'placeholder' in props ? props.placeholder : 'Select Date';
                const disabledTime = props.showTime ? props.disabledTime : null;
                const calendarClassName = classNames({
                    [`${prefixCls}-time`]: props.showTime,
                    [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
                });
                let pickerProps = {};
                let calendarProps = {};
                const pickerStyle = {};
                if (props.showTime) {
                    calendarProps = {
                        onSelect: this.handleChange,
                    };
                    pickerStyle.minWidth = 195;
                }
                else {
                    pickerProps = {
                        onChange: this.handleChange,
                    };
                }
                if ('mode' in props) {
                    calendarProps.mode = props.mode;
                }
                warning(!('onOK' in props), 'DatePicker', 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
                const calendar = (React.createElement(TheCalendar, Object.assign({}, calendarProps, { disabledDate: props.disabledDate, disabledTime: disabledTime, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || interopDefault(moment)(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, dateRender: props.dateRender, format: props.format, showToday: props.showToday, monthCellContentRender: props.monthCellContentRender, renderFooter: this.renderFooter, onPanelChange: props.onPanelChange, onChange: this.handleCalendarChange, value: showDate })));
                const clearIcon = !props.disabled && props.allowClear && value ? (React.createElement(Icon, { icon: "close", className: `${prefixCls}-picker-clear`, onClick: this.clearSelection })) : null;
                const inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: `${prefixCls}-picker-icon ${prefixCls}-picker-icon-calendar` }));
                const dataOrAriaProps = getDataOrAriaProps(props);
                const input = ({ value: inputValue }) => (React.createElement("div", null,
                    React.createElement("input", Object.assign({ ref: this.saveInput, disabled: props.disabled, readOnly: true, value: formatDate(inputValue, props.format), placeholder: placeholder, className: props.pickerInputClass, tabIndex: props.tabIndex, name: props.name }, dataOrAriaProps)),
                    clearIcon,
                    inputIcon));
                return (React.createElement("span", { id: props.id, className: classNames(props.className, props.pickerClass), style: Object.assign(Object.assign({}, pickerStyle), props.style), onFocus: props.onFocus, onBlur: props.onBlur, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                    React.createElement(RcDatePicker, Object.assign({}, props, pickerProps, { calendar: calendar, value: value, prefixCls: `${prefixCls}-picker-container`, style: props.popupStyle, open: open, onOpenChange: this.handleOpenChange }), input)));
            };
            const value = props.value || props.defaultValue;
            if (value && !interopDefault(moment).isMoment(value)) {
                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' +
                    'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
            }
            this.state = {
                value,
                showDate: value,
                open: false,
            };
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            const state = {};
            let { open } = prevState;
            if ('open' in nextProps) {
                state.open = nextProps.open;
                open = nextProps.open || false;
            }
            if ('value' in nextProps) {
                state.value = nextProps.value;
                if (nextProps.value !== prevState.value ||
                    (!open && nextProps.value !== prevState.showDate)) {
                    state.showDate = nextProps.value;
                }
            }
            return Object.keys(state).length > 0 ? state : null;
        }
        componentDidUpdate(_, prevState) {
            if (!('open' in this.props) && prevState.open && !this.state.open) {
                this.focus();
            }
        }
        focus() {
            this.input.focus();
        }
        blur() {
            this.input.blur();
        }
        render() {
            return this.renderPicker();
        }
    }
    CalenderWrapper.defaultProps = {
        allowClear: true,
        showToday: true,
    };
    polyfill(CalenderWrapper);
    return CalenderWrapper;
}
//# sourceMappingURL=CreatePicker.js.map