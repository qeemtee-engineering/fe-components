import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import classNames from 'classnames';
import * as moment from 'moment';
import interopDefault from '../utils/interopDefault';
import { generateShowHourMinuteSecond } from '../TimePicker';
import warning from '../utils/warning';
const DEFAULT_FORMAT = {
    date: 'DD/MM/YYYY',
    dateTime: 'DD/MM/YYYY HH:mm:ss',
    week: 'gggg-wo',
    month: 'MM/YYYY',
};
function getColumns({ showHour, showMinute, showSecond, use12Hours }) {
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
function checkValidate(value, propName) {
    const values = Array.isArray(value) ? value : [value];
    values.forEach(val => {
        if (!val)
            return;
        warning(!interopDefault(moment).isMoment(val) || val.isValid(), 'DatePicker', `\`${propName}\` provides invalidate moment time. If you want to set empty value, use \`null\` instead.`);
    });
}
export default function WrapPicker(Picker, pickerType) {
    class PickerWrapper extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {};
            this.savePicker = (node) => {
                this.picker = node;
            };
            this.getDefaultLocale = () => {
                const result = Object.assign({}, this.props.locale);
                result.lang = Object.assign(Object.assign({}, result.lang), (this.props.locale || {}).lang);
                return result;
            };
            this.handleOpenChange = (open) => {
                const { onOpenChange } = this.props;
                onOpenChange(open);
            };
            this.handleFocus = e => {
                const { onFocus } = this.props;
                if (onFocus) {
                    onFocus(e);
                }
            };
            this.handleBlur = e => {
                const { onBlur } = this.props;
                if (onBlur) {
                    onBlur(e);
                }
            };
            this.handleMouseEnter = e => {
                const { onMouseEnter } = this.props;
                if (onMouseEnter) {
                    onMouseEnter(e);
                }
            };
            this.handleMouseLeave = e => {
                const { onMouseLeave } = this.props;
                if (onMouseLeave) {
                    onMouseLeave(e);
                }
            };
            this.renderPicker = () => {
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
                const rcTimePickerProps = Object.assign(Object.assign({}, generateShowHourMinuteSecond(timeFormat)), { format: timeFormat, use12Hours: showTime && showTime.use12Hours });
                const columns = getColumns(rcTimePickerProps);
                const timePickerCls = `DatePicker-time-picker-column-${columns}`;
                const timePicker = showTime ? (React.createElement(TimePickerPanel, Object.assign({}, rcTimePickerProps, showTime, { prefixCls: "DatePicker-time-picker", className: timePickerCls, placeholder: "Select Time", transitionName: "slide-up" }))) : null;
                return (React.createElement(Picker, Object.assign({}, this.props, { getCalendarContainer: getPopupContainer, format: mergedFormat, ref: this.savePicker, pickerClass: pickerClass, pickerInputClass: pickerInputClass, timePicker: timePicker, onOpenChange: this.handleOpenChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave })));
            };
        }
        static getDerivedStateFromProps({ value, defaultValue }) {
            checkValidate(defaultValue, 'defaultValue');
            checkValidate(value, 'value');
            return {};
        }
        componentDidMount() {
            const { autoFocus, disabled } = this.props;
            if (autoFocus && !disabled) {
                this.focus();
            }
        }
        focus() {
            this.picker.focus();
        }
        blur() {
            this.picker.blur();
        }
        render() {
            return this.renderPicker();
        }
    }
    PickerWrapper.defaultProps = {
        transitionName: 'slide-up',
        popupStyle: {},
        onChange() { },
        onOk() { },
        onOpenChange() { },
        locale: {},
    };
    polyfill(PickerWrapper);
    return PickerWrapper;
}
//# sourceMappingURL=WrapPicker.js.map