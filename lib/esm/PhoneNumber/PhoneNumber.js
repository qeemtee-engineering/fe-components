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
import * as React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './PhoneNumber.css';
const PhoneNumber = (_a) => {
    var { hasContact } = _a, props = __rest(_a, ["hasContact"]);
    const emitChange = (selected) => {
        props.onChange(selected);
    };
    return (React.createElement(PhoneInput, Object.assign({}, props, { onChange: emitChange, className: cs('react-input-custom-width', props.className, !hasContact
            ? 'error-react-phone-number-input react-phone-number-input-padding'
            : 'react-phone-number-input-padding') })));
};
export default PhoneNumber;
//# sourceMappingURL=PhoneNumber.js.map