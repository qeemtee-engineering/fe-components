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
import cs from 'classnames';
import React from 'react';
import Number from '../Number';
import './Currency.css';
const Currency = React.forwardRef((props, ref) => {
    const { className, symbol, symbolClassName, value, fixed, side, delimiter } = props, other = __rest(props, ["className", "symbol", "symbolClassName", "value", "fixed", "side", "delimiter"]);
    const classes = cs('Currency', className);
    const symbolClasses = symbolClassName
        ? cs('symbol right ', symbolClassName)
        : `symbol right size`;
    const _symbol = symbol;
    return (React.createElement("span", { className: classes },
        side === 'left' && React.createElement("span", { className: "symbol left" }, _symbol),
        React.createElement(Number, Object.assign({}, other, { value: value, fixed: fixed, delimiter: delimiter, ref: ref })),
        side !== 'left' && React.createElement("span", { className: symbolClasses }, _symbol)));
});
export default Currency;
//# sourceMappingURL=Currency.js.map