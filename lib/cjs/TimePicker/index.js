var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import classNames from 'classnames';
import * as moment from 'moment';
import omit from 'omit.js';
import RcTimePicker from 'rc-time-picker/lib/TimePicker';
import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../Icon';
import interopDefault from '../utils/interopDefault';
import warning from '../utils/warning';
import './TimePicker.css';
export function generateShowHourMinuteSecond(format) {
    return {
        showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
        showMinute: format.indexOf('m') > -1,
        showSecond: format.indexOf('s') > -1,
    };
}
class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenClose = ({ open }) => {
            const { onOpenChange } = this.props;
            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        this.saveTimePicker = (timePickerRef) => {
            this.timePickerRef = timePickerRef;
        };
        this.handleChange = (value) => {
            if (!('value' in this.props)) {
                this.setState({ value });
            }
            const { onChange, format = 'HH:mm:ss' } = this.props;
            if (onChange) {
                onChange(value, (value && value.format(format)) || '');
            }
        };
        this.renderTimePicker = () => {
            const _a = this.props, { className, addon, placeholder } = _a, props = __rest(_a, ["className", "addon", "placeholder"]);
            const pickerProps = omit(props, ['defaultValue', 'allowEmpty', 'allowClear']);
            const format = this.getDefaultFormat();
            const pickerClassName = classNames(className);
            const pickerAddon = (panel) => addon ? React.createElement("div", { className: `TimePicker-panel-addon` }, addon(panel)) : null;
            return (React.createElement(RcTimePicker, Object.assign({}, generateShowHourMinuteSecond(format), pickerProps, { allowEmpty: this.getAllowClear(), prefixCls: "TimePicker", ref: this.saveTimePicker, format: format, className: pickerClassName, value: this.state.value, placeholder: placeholder ? placeholder : 'Select Time', onChange: this.handleChange, onOpen: this.handleOpenClose, onClose: this.handleOpenClose, addon: pickerAddon, inputIcon: this.renderInputIcon('TimePicker'), clearIcon: this.renderClearIcon('TimePicker') })));
        };
        const value = props.value || props.defaultValue;
        if (value && !interopDefault(moment).isMoment(value)) {
            throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' +
                'see: https://u.ant.design/time-picker-value');
        }
        this.state = {
            value,
        };
        warning(!('allowEmpty' in props), 'TimePicker', '`allowEmpty` is deprecated. Please use `allowClear` instead.');
    }
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            return { value: nextProps.value };
        }
        return null;
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
    focus() {
        this.timePickerRef.focus();
    }
    blur() {
        this.timePickerRef.blur();
    }
    renderInputIcon(prefixCls) {
        const clockIcon = React.createElement(Icon, { icon: "access_time", className: `${prefixCls}-clock-icon` });
        return React.createElement("span", { className: `${prefixCls}-icon` }, clockIcon);
    }
    renderClearIcon(prefixCls) {
        const clearIconPrefixCls = `${prefixCls}-clear`;
        return React.createElement(Icon, { icon: "access_time", className: clearIconPrefixCls });
    }
    render() {
        return this.renderTimePicker();
    }
}
TimePicker.defaultProps = {
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
polyfill(TimePicker);
export default TimePicker;
//# sourceMappingURL=index.js.map