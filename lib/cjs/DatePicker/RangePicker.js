import * as React from 'react';
import * as moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import Icon from '../Icon';
import Tag from '../Tag';
import warning from '../utils/warning';
import interopDefault from '../utils/interopDefault';
import { formatDate } from './utils';
function getShowDateFromValue(value, mode) {
    const [start, end] = value;
    if (!start && !end) {
        return;
    }
    if (mode && mode[0] === 'month') {
        return [start, end];
    }
    const newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
    return [start, newEnd];
}
function pickerValueAdapter(value) {
    if (!value) {
        return;
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value, value.clone().add(1, 'month')];
}
function isEmptyArray(arr) {
    if (Array.isArray(arr)) {
        return arr.length === 0 || arr.every(i => !i);
    }
    return false;
}
function fixLocale(value, localeCode) {
    if (!localeCode) {
        return;
    }
    if (!value || value.length === 0) {
        return;
    }
    const [start, end] = value;
    if (start) {
        start.locale(localeCode);
    }
    if (end) {
        end.locale(localeCode);
    }
}
class RangePicker extends React.Component {
    constructor(props) {
        super(props);
        this.savePicker = (node) => {
            this.picker = node;
        };
        this.clearSelection = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ value: [] });
            this.handleChange([]);
        };
        this.clearHoverValue = () => this.setState({ hoverValue: [] });
        this.handleChange = (value) => {
            const { props } = this;
            if (!('value' in props)) {
                this.setState(({ showDate }) => ({
                    value,
                    showDate: getShowDateFromValue(value) || showDate,
                }));
            }
            if (value[0] && value[0].diff(value[1]) > 0) {
                value[1] = undefined;
            }
            const [start, end] = value;
            props.onChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
        };
        this.handleOpenChange = (open) => {
            if (!('open' in this.props)) {
                this.setState({ open });
            }
            if (open === false) {
                this.clearHoverValue();
            }
            const { onOpenChange } = this.props;
            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        this.handleShowDateChange = (showDate) => this.setState({ showDate });
        this.handleHoverChange = (hoverValue) => this.setState({ hoverValue });
        this.handleRangeMouseLeave = () => {
            if (this.state.open) {
                this.clearHoverValue();
            }
        };
        this.handleCalendarInputSelect = (value) => {
            const [start] = value;
            if (!start) {
                return;
            }
            this.setState(({ showDate }) => ({
                value,
                showDate: getShowDateFromValue(value) || showDate,
            }));
        };
        this.handleRangeClick = (value) => {
            if (typeof value === 'function') {
                value = value();
            }
            this.setValue(value, true);
            const { onOk, onOpenChange } = this.props;
            if (onOk) {
                onOk(value);
            }
            if (onOpenChange) {
                onOpenChange(false);
            }
        };
        this.renderFooter = () => {
            const { ranges, renderExtraFooter } = this.props;
            const { prefixCls, tagPrefixCls } = this;
            if (!ranges && !renderExtraFooter) {
                return null;
            }
            const customFooter = renderExtraFooter ? (React.createElement("div", { className: `${prefixCls}-footer-extra`, key: "extra" }, renderExtraFooter())) : null;
            const operations = Object.keys(ranges || {}).map(range => {
                const value = ranges[range];
                return (React.createElement(Tag, { key: range, prefixCls: tagPrefixCls, color: "blue", onClick: () => this.handleRangeClick(value), onMouseEnter: () => this.setState({ hoverValue: value }), onMouseLeave: this.handleRangeMouseLeave }, range));
            });
            const rangeNode = operations && operations.length > 0 ? (React.createElement("div", { className: `${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`, key: "range" }, operations)) : null;
            return [rangeNode, customFooter];
        };
        this.renderRangePicker = () => {
            const { state, props } = this;
            const { value, showDate, hoverValue, open } = state;
            const { prefixCls: customizePrefixCls, tagPrefixCls: customizeTagPrefixCls, popupStyle, style, disabledDate, disabledTime, showTime, showToday, ranges, onOk, locale, localeCode, format, dateRender, onCalendarChange, separator, } = props;
            const prefixCls = 'DatePicker';
            const tagPrefixCls = 'DatePicker-tag';
            this.prefixCls = prefixCls;
            this.tagPrefixCls = tagPrefixCls;
            fixLocale(value, localeCode);
            fixLocale(showDate, localeCode);
            warning(!('onOK' in props), 'RangePicker', 'It should be `RangePicker[onOk]`, instead of `onOK`!');
            const calendarClassName = classNames({
                [`${prefixCls}-time`]: showTime,
                [`${prefixCls}-range-with-ranges`]: ranges,
            });
            const pickerChangeHandler = {
                onChange: this.handleChange,
            };
            let calendarProps = {
                onOk: this.handleChange,
            };
            if (props.timePicker) {
                pickerChangeHandler.onChange = changedValue => this.handleChange(changedValue);
            }
            else {
                calendarProps = {};
            }
            if ('mode' in props) {
                calendarProps.mode = props.mode;
            }
            const startPlaceholder = 'placeholder' in props ? props.placeholder[0] : 'Start Date';
            const endPlaceholder = 'placeholder' in props ? props.placeholder[1] : 'End Date';
            const calendar = (React.createElement(RangeCalendar, Object.assign({}, calendarProps, { seperator: separator, onChange: onCalendarChange, format: format, prefixCls: prefixCls, className: calendarClassName, renderFooter: this.renderFooter, timePicker: props.timePicker, disabledDate: disabledDate, disabledTime: disabledTime, dateInputPlaceholder: [startPlaceholder, endPlaceholder], locale: locale.lang, onOk: onOk, dateRender: dateRender, value: showDate, onValueChange: this.handleShowDateChange, hoverValue: hoverValue, onHoverChange: this.handleHoverChange, onPanelChange: props.onPanelChange, showToday: showToday, onInputSelect: this.handleCalendarInputSelect })));
            const pickerStyle = {};
            if (props.showTime) {
                pickerStyle.width = (style && style.width) || 350;
            }
            const [startValue, endValue] = value;
            const clearIcon = !props.disabled && props.allowClear && value && (startValue || endValue) ? (React.createElement(Icon, { icon: "access_time", className: `${prefixCls}-picker-clear`, onClick: this.clearSelection })) : null;
            const inputIcon = (React.createElement(Icon, { icon: "calendar_today", className: `${prefixCls}-picker-icon ${prefixCls}-picker-icon-calendar` }));
            const input = ({ value: inputValue }) => {
                const [start, end] = inputValue;
                return (React.createElement("span", { className: props.pickerInputClass },
                    React.createElement("input", { disabled: props.disabled, readOnly: true, value: formatDate(start, props.format), placeholder: startPlaceholder, className: `${prefixCls}-range-picker-input`, tabIndex: -1 }),
                    React.createElement("span", { className: `${prefixCls}-range-picker-separator` },
                        " ",
                        separator,
                        " "),
                    React.createElement("input", { disabled: props.disabled, readOnly: true, value: formatDate(end, props.format), placeholder: endPlaceholder, className: `${prefixCls}-range-picker-input`, tabIndex: -1 }),
                    clearIcon,
                    inputIcon));
            };
            return (React.createElement("span", { ref: this.savePicker, id: props.id, className: classNames(props.className, props.pickerClass), style: Object.assign(Object.assign({}, style), pickerStyle), tabIndex: props.disabled ? -1 : 0, onFocus: props.onFocus, onBlur: props.onBlur, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                React.createElement(RcDatePicker, Object.assign({}, props, pickerChangeHandler, { calendar: calendar, value: value, open: open, onOpenChange: this.handleOpenChange, prefixCls: `${prefixCls}-picker-container`, style: popupStyle }), input)));
        };
        const value = props.value || props.defaultValue || [];
        const [start, end] = value;
        if ((start && !interopDefault(moment).isMoment(start)) ||
            (end && !interopDefault(moment).isMoment(end))) {
            throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' +
                'see: https://u.ant.design/date-picker-value');
        }
        const pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
        this.state = {
            value,
            showDate: pickerValueAdapter(pickerValue || interopDefault(moment)()),
            open: props.open,
            hoverValue: [],
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let state = null;
        if ('value' in nextProps) {
            const value = nextProps.value || [];
            state = {
                value,
            };
            if (!shallowequal(nextProps.value, prevState.value)) {
                state = Object.assign(Object.assign({}, state), { showDate: getShowDateFromValue(value, nextProps.mode) || prevState.showDate });
            }
        }
        if ('open' in nextProps && prevState.open !== nextProps.open) {
            state = Object.assign(Object.assign({}, state), { open: nextProps.open });
        }
        return state;
    }
    componentDidUpdate(_, prevState) {
        if (!('open' in this.props) && prevState.open && !this.state.open) {
            this.focus();
        }
    }
    setValue(value, hidePanel) {
        this.handleChange(value);
        if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
            this.setState({ open: false });
        }
    }
    focus() {
        this.picker.focus();
    }
    blur() {
        this.picker.blur();
    }
    render() {
        return this.renderRangePicker();
    }
}
RangePicker.defaultProps = {
    allowClear: true,
    showToday: false,
    separator: '~',
};
polyfill(RangePicker);
export default RangePicker;
//# sourceMappingURL=RangePicker.js.map