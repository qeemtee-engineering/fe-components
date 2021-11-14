import * as React from 'react';
import * as moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import Calendar from 'rc-calendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import Icon from '../Icon';
import interopDefault from '../utils/interopDefault';
function formatValue(value, format) {
    return (value && value.format(format)) || '';
}
class WeekPicker extends React.Component {
    constructor(props) {
        super(props);
        this.saveInput = (node) => {
            this.input = node;
        };
        this.weekDateRender = (current) => {
            const selectedValue = this.state.value;
            const { prefixCls } = this;
            const { dateRender } = this.props;
            const dateNode = dateRender ? dateRender(current) : current.date();
            if (selectedValue &&
                current.year() === selectedValue.year() &&
                current.week() === selectedValue.week()) {
                return (React.createElement("div", { className: `${prefixCls}-selected-day` },
                    React.createElement("div", { className: `${prefixCls}-date` }, dateNode)));
            }
            return React.createElement("div", { className: `${prefixCls}-date` }, dateNode);
        };
        this.handleChange = (value) => {
            if (!('value' in this.props)) {
                this.setState({ value });
            }
            this.props.onChange(value, formatValue(value, this.props.format));
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
        this.clearSelection = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.handleChange(null);
        };
        this.renderFooter = (...args) => {
            const { prefixCls, renderExtraFooter } = this.props;
            return renderExtraFooter ? (React.createElement("div", { className: `${prefixCls}-footer-extra` }, renderExtraFooter(...args))) : null;
        };
        this.renderWeekPicker = () => {
            const { prefixCls: customizePrefixCls, className, disabled, pickerClass, popupStyle, pickerInputClass, format, allowClear, locale, localeCode, disabledDate, style, onFocus, onBlur, id, suffixIcon, } = this.props;
            const prefixCls = 'DatePicker';
            this.prefixCls = prefixCls;
            const { open, value: pickerValue } = this.state;
            if (pickerValue && localeCode) {
                pickerValue.locale(localeCode);
            }
            const placeholder = 'placeholder' in this.props ? this.props.placeholder : locale.lang.placeholder;
            const calendar = (React.createElement(Calendar, { showWeekNumber: true, dateRender: this.weekDateRender, prefixCls: prefixCls, format: format, locale: locale.lang, showDateInput: false, showToday: false, disabledDate: disabledDate, renderFooter: this.renderFooter }));
            const clearIcon = !disabled && allowClear && this.state.value ? (React.createElement(Icon, { icon: "close", className: `${prefixCls}-picker-clear`, onClick: this.clearSelection })) : null;
            const inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: `${prefixCls}-picker-icon ${prefixCls}-picker-icon-calendar` }));
            const input = ({ value }) => (React.createElement("span", { style: { display: 'inline-block', width: '100%' } },
                React.createElement("input", { ref: this.saveInput, disabled: disabled, readOnly: true, value: (value && value.format(format)) || '', placeholder: placeholder, className: pickerInputClass, onFocus: onFocus, onBlur: onBlur }),
                clearIcon,
                inputIcon));
            return (React.createElement("span", { className: classNames(className, pickerClass), style: style, id: id },
                React.createElement(RcDatePicker, Object.assign({}, this.props, { calendar: calendar, prefixCls: `${prefixCls}-picker-container`, value: pickerValue, onChange: this.handleChange, open: open, onOpenChange: this.handleOpenChange, style: popupStyle }), input)));
        };
        const value = props.value || props.defaultValue;
        if (value && !interopDefault(moment).isMoment(value)) {
            throw new Error('The value/defaultValue of WeekPicker must be ' +
                'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
        }
        this.state = {
            value,
            open: props.open,
        };
    }
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps || 'open' in nextProps) {
            const state = {};
            if ('value' in nextProps) {
                state.value = nextProps.value;
            }
            if ('open' in nextProps) {
                state.open = nextProps.open;
            }
            return state;
        }
        return null;
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
        return this.renderWeekPicker();
    }
}
WeekPicker.defaultProps = {
    format: 'gggg-wo',
    allowClear: true,
};
polyfill(WeekPicker);
export default WeekPicker;
//# sourceMappingURL=WeekPicker.js.map