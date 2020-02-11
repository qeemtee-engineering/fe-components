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
import React, { useState, useEffect } from 'react';
import './Input.css';
import { withNaming } from '@bem-react/classname';
import cs from 'classnames';
const cn = withNaming({ e: '__', m: '--' })('Input');
const Input = React.forwardRef((props, ref) => {
    const [type, setType] = useState('text');
    const [touched, setTouched] = useState(false);
    const { submitted, label, className, value, onChange, onFocus, onBlur, error, disabled, placeholder, children, name, icon, required } = props, otherProps = __rest(props, ["submitted", "label", "className", "value", "onChange", "onFocus", "onBlur", "error", "disabled", "placeholder", "children", "name", "icon", "required"]);
    useEffect(() => setType(otherProps.type || 'text'), []);
    const togglePassword = () => {
        setType(type === 'text' ? 'password' : 'text');
    };
    const _onChange = (event) => {
        if (onChange) {
            onChange(event);
        }
    };
    const _onFocus = (event) => {
        if (onFocus) {
            onFocus(event);
        }
    };
    const _onBlur = (event) => {
        setTouched(true);
        if (onBlur) {
            onBlur(event);
        }
    };
    const _value = (children && children.toString()) || value;
    const meta = { password: otherProps.type === 'password' };
    return (React.createElement("label", { className: `Input ${(error && touched) || (submitted && error) ? cn('error') : ''}`, ref: ref },
        label && (React.createElement("span", { className: cn('title') },
            label,
            " ",
            required && React.createElement("span", { className: cn('required') }, "*"))),
        React.createElement("div", { className: cn('input') },
            icon && React.createElement("div", { className: cn('meta') }, icon),
            React.createElement("input", Object.assign({}, otherProps, { ref: ref, type: type, value: _value, onChange: _onChange, onFocus: _onFocus, onBlur: _onBlur, placeholder: placeholder, disabled: disabled, name: name, className: cs(otherProps.className, { 'Input__input-icon': icon }) })),
            React.createElement("div", { className: `${cn('input-border')} ${(error && touched) || (submitted && error) ? cn('error-border') : ''}` }),
            meta.password && (React.createElement("div", { className: cn('meta') }, meta.password && (React.createElement("img", { onClick: togglePassword, className: "eye", src: type === 'password'
                    ? 'https://web-assets.qeemtee.com/component/eye_open.svg'
                    : 'https://web-assets.qeemtee.com/component/eye_close.svg' }))))),
        (error && touched) || (submitted && error) ? (React.createElement("p", { className: cn('error-message') }, error)) : ('')));
});
export default Input;
//# sourceMappingURL=Input.js.map