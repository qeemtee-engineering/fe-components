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
import Dialog from 'rc-dialog';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import React from 'react';
import Button from '../Button';
import './Modal.css';
const cn = withNaming({ e: '__', m: '-' })('Modal');
let mousePosition;
const getClickPosition = (e) => {
    mousePosition = {
        x: e.pageX,
        y: e.pageY,
    };
    setTimeout(() => (mousePosition = undefined), 100);
};
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    addEventListener(document.documentElement, 'click', getClickPosition);
}
const Modal = (props) => {
    const className = `${props.wrapClassName || ''} ${props.centered ? 'Modal-center' : ''}`.trim();
    const handleCancel = (e) => {
        const { onCancel } = props;
        if (onCancel) {
            onCancel(e);
        }
    };
    const handleOk = (e) => {
        const { onOk } = props;
        if (onOk) {
            onOk(e);
        }
    };
    const renderFooter = () => {
        return (React.createElement("div", { className: cn('footer') },
            React.createElement(Button, { color: "reject", layout: "outline", className: cn('cancel'), onClick: handleCancel }, props.cancelText || 'Cancel'),
            React.createElement(Button, { color: "success", className: cn('ok'), onClick: handleOk }, props.okText || 'Confirm')));
    };
    const renderModal = () => {
        const { footer, visible, centered, showFooter = true } = props, restProps = __rest(props, ["footer", "visible", "centered", "showFooter"]);
        return (React.createElement(Dialog, Object.assign({}, restProps, { footer: showFooter ? (footer === undefined ? renderFooter() : footer) : null, visible: visible, prefixCls: cn(), wrapClassName: className, mousePosition: mousePosition, onClose: handleCancel, animation: "zoom", maskAnimation: "fade" })));
    };
    return renderModal();
};
export default Modal;
//# sourceMappingURL=Modal.js.map