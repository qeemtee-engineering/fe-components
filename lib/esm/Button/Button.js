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
import './Button.scss';
const cn = withNaming({ e: '__', m: '-' })('Button');
const Button = (props) => {
    const { label, children, className, type, disabled, color = 'primary', layout = 'solid' } = props, other = __rest(props, ["label", "children", "className", "type", "disabled", "color", "layout"]);
    const classes = `${cn('', {
        color,
        layout,
    })} ${className}`.trim();
    return (React.createElement("button", Object.assign({}, other, { type: type || 'button', disabled: disabled, className: classes }), children));
};
export default Button;
//# sourceMappingURL=Button.js.map