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
import { withNaming } from '@bem-react/classname';
import React from 'react';
import './Switch.css';
const cn = withNaming({ e: '__', m: '-' })('Switch');
const Switch = React.forwardRef((props, ref) => {
    const { label, className = '', value, disabled, checked, onChange, children, color = 'primary', name, required } = props, other = __rest(props, ["label", "className", "value", "disabled", "checked", "onChange", "children", "color", "name", "required"]);
    const classes = `${cn('', {
        disabled,
        color,
    })} ${className}`.trim();
    return (React.createElement("div", { className: classes },
        React.createElement("label", null,
            React.createElement("div", { className: "checkbox" },
                React.createElement("input", Object.assign({}, other, { type: "checkbox", value: value, checked: checked, onChange: onChange, disabled: disabled, name: name, ref: ref })),
                React.createElement("div", { className: "switch" }))),
        (children || label) && (React.createElement("span", { className: "label" },
            children || label,
            " ",
            required && React.createElement("span", { className: cn('required') }, "*")))));
});
export default Switch;
//# sourceMappingURL=Switch.js.map