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
import { numWithCommas } from '../utils';
import './Number.css';
function round(input, precision) {
    const [number, exponent] = input.toString().split('.');
    if (exponent) {
        input = `0.${exponent}`;
    }
    let [unit, mantissa] = `${input}e`.split('e');
    let rounded = Math.round(+`${unit}e${Number(mantissa) + precision}`);
    [unit, mantissa] = `${rounded}e`.split('e');
    rounded = Number(`${unit}e${Number(mantissa) - precision}`);
    if (exponent) {
        [unit, mantissa] = rounded.toString().split('.');
        rounded = `${Number(unit) >= 1 ? Number(number) + Number(unit) : number}${precision > 0 ? '.' : ''}${mantissa || Array(precision).fill('0').join('')}`;
    }
    else {
        rounded += `.${Array(precision).fill('0').join('')}`;
    }
    return rounded;
}
const _Number = React.forwardRef((props, ref) => {
    const { className, value, fixed, delimiter } = props, other = __rest(props, ["className", "value", "fixed", "delimiter"]);
    const number = typeof fixed === 'number' ? round(value, fixed) : value;
    const classes = cs('Number', className);
    const [unit, mantissa] = String(number).split('.');
    return (React.createElement("span", Object.assign({ className: classes }, other, { ref: ref }),
        React.createElement("span", { className: "value" }, numWithCommas(unit, (delimiter && delimiter.thousands) || ',')),
        mantissa && fixed !== 0 && (React.createElement("span", { className: "decimals" },
            (delimiter && delimiter.decimals) || '.',
            mantissa.substring(0, 3)))));
});
export default _Number;
//# sourceMappingURL=Number.js.map