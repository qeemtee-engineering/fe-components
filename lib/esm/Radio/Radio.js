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
import React from 'react';
import { withNaming } from '@bem-react/classname';
import './Radio.css';
const cn = withNaming({ e: '__', m: '-' })('Radio');
const Radio = React.forwardRef((props, ref) => {
    const { className = '', name, checked, onChange, value, label, children, disabled, color = 'primary', required } = props, other = __rest(props, ["className", "name", "checked", "onChange", "value", "label", "children", "disabled", "color", "required"]);
    const classes = `${cn('', {
        disabled,
        color,
    })} ${className}`.trim();
    return (React.createElement("label", { className: classes },
        React.createElement("input", Object.assign({}, other, { type: "radio", checked: checked, name: name, value: value, onChange: onChange, disabled: disabled, ref: ref })),
        React.createElement("div", { className: "radio" }),
        React.createElement("span", { className: "label" },
            children || label || value,
            " ",
            required && React.createElement("span", { className: cn('required') }, "*"))));
});
export default Radio;
//# sourceMappingURL=Radio.js.map