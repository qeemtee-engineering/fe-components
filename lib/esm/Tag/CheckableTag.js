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
import * as React from 'react';
import classNames from 'classnames';
export default class CheckableTag extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            const { checked, onChange } = this.props;
            if (onChange) {
                onChange(!checked);
            }
        };
        this.renderCheckableTag = () => {
            const _a = this.props, { className, checked } = _a, restProps = __rest(_a, ["className", "checked"]);
            const prefixCls = 'Tag';
            const cls = classNames(prefixCls, {
                [`${prefixCls}-checkable`]: true,
                [`${prefixCls}-checkable-checked`]: checked,
            }, className);
            delete restProps.onChange;
            return React.createElement("span", Object.assign({}, restProps, { className: cls, onClick: this.handleClick }));
        };
    }
    render() {
        return this.renderCheckableTag();
    }
}
//# sourceMappingURL=CheckableTag.js.map