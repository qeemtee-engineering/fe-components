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
import omit from 'omit.js';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../Icon';
import CheckableTag from './CheckableTag';
import { PresetColorTypes } from '../utils/colors';
import warning from '../utils/warning';
import './Tag.css';
const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
        this.handleIconClick = (e) => {
            this.setVisible(false, e);
        };
        this.renderTag = () => {
            const _a = this.props, { children } = _a, otherProps = __rest(_a, ["children"]);
            const tagProps = omit(otherProps, [
                'onClose',
                'afterClose',
                'color',
                'visible',
                'closable',
                'prefixCls',
            ]);
            return (React.createElement("span", Object.assign({}, tagProps, { className: this.getTagClassName(), style: this.getTagStyle() }),
                children,
                this.renderCloseIcon()));
        };
        warning(!('afterClose' in props), 'Tag', "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version.");
    }
    static getDerivedStateFromProps(nextProps) {
        if ('visible' in nextProps) {
            return {
                visible: nextProps.visible,
            };
        }
        return null;
    }
    getTagStyle() {
        const { color, style } = this.props;
        const isPresetColor = this.isPresetColor();
        return Object.assign({ backgroundColor: color && !isPresetColor ? color : undefined }, style);
    }
    getTagClassName() {
        const { className, color } = this.props;
        const { visible } = this.state;
        const isPresetColor = this.isPresetColor();
        const prefixCls = 'Tag';
        return classNames(prefixCls, {
            [`${prefixCls}-${color}`]: isPresetColor,
            [`${prefixCls}-has-color`]: color && !isPresetColor,
            [`${prefixCls}-hidden`]: !visible,
        }, className);
    }
    setVisible(visible, e) {
        const { onClose } = this.props;
        if (onClose) {
            onClose(e);
        }
        if (e.defaultPrevented) {
            return;
        }
        if (!('visible' in this.props)) {
            this.setState({ visible });
        }
    }
    isPresetColor() {
        const { color } = this.props;
        if (!color) {
            return false;
        }
        return PresetColorRegex.test(color);
    }
    renderCloseIcon() {
        const { closable } = this.props;
        return closable ? (React.createElement(Icon, { icon: "close", className: "Tag-close", onClick: this.handleIconClick })) : null;
    }
    render() {
        return this.renderTag();
    }
}
Tag.CheckableTag = CheckableTag;
Tag.defaultProps = {
    closable: false,
};
polyfill(Tag);
export default Tag;
//# sourceMappingURL=Tag.js.map