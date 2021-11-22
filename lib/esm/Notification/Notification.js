import Notification from 'rc-notification';
import * as React from 'react';
import Icon from '../Icon';
import './Notification.css';
const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let defaultGetContainer;
function setNotificationConfig(options) {
    const { duration, placement, bottom, top, getContainer } = options;
    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
}
function getPlacementStyle(placement, top = defaultTop, bottom = defaultBottom) {
    let style;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top,
                bottom: 'auto',
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top,
                bottom: 'auto',
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom,
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom,
            };
            break;
    }
    return style;
}
function getNotificationInstance({ prefixCls, placement = defaultPlacement, getContainer = defaultGetContainer, top, bottom, }, callback) {
    const cacheKey = `${prefixCls}-${placement}`;
    if (notificationInstance[cacheKey]) {
        callback(notificationInstance[cacheKey]);
        return;
    }
    Notification.newInstance({
        prefixCls,
        className: `${prefixCls}-${placement}`,
        style: getPlacementStyle(placement, top, bottom),
        getContainer,
        closeIcon: React.createElement(Icon, { className: "Notification-close-icon", icon: "close" }),
    }, (notification) => {
        notificationInstance[cacheKey] = notification;
        callback(notification);
    });
}
const typeToIcon = {
    success: { icon: 'check', color: '#28a745' },
    info: { icon: 'info', color: '#17a2b8' },
    error: { icon: 'error_outline', color: '#dc3545' },
    warning: { icon: 'warning', color: '#ffc107' },
};
function notice(args) {
    const outerPrefixCls = 'Notification';
    const prefixCls = `${outerPrefixCls}-notice`;
    const duration = args.duration === undefined ? defaultDuration : args.duration;
    let iconNode = null;
    if (args.icon) {
        iconNode = React.createElement("span", { className: `${prefixCls}-icon` }, args.icon);
    }
    else if (args.type) {
        const iconType = typeToIcon[args.type];
        iconNode = React.createElement(Icon, { className: `${prefixCls}-icon`, icon: iconType.icon, color: iconType.color });
    }
    const autoMarginTag = !args.description && iconNode ? (React.createElement("span", { className: `${prefixCls}-message-single-line-auto-margin` })) : null;
    const { placement, top, bottom, getContainer } = args;
    getNotificationInstance({
        prefixCls: outerPrefixCls,
        placement,
        top,
        bottom,
        getContainer,
    }, (notification) => {
        notification.notice({
            content: (React.createElement("div", { className: iconNode ? `${prefixCls}-with-icon` : '' },
                iconNode,
                React.createElement("div", { className: `${prefixCls}-message` },
                    autoMarginTag,
                    args.message),
                React.createElement("div", { className: `${prefixCls}-description` }, args.description),
                args.btn ? React.createElement("span", { className: `${prefixCls}-btn` }, args.btn) : null)),
            duration,
            closable: true,
            onClose: args.onClose,
            onClick: args.onClick,
            key: args.key,
            style: args.style || {},
            className: args.className,
        });
    });
}
const api = {
    open: notice,
    close(key) {
        Object.keys(notificationInstance).forEach((cacheKey) => notificationInstance[cacheKey].removeNotice(key));
    },
    config: setNotificationConfig,
    destroy() {
        Object.keys(notificationInstance).forEach((cacheKey) => {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    },
};
['success', 'info', 'warning', 'error'].forEach((type) => {
    api[type] = (args) => api.open(Object.assign(Object.assign({}, args), { type }));
});
api.warn = api.warning;
export default api;
//# sourceMappingURL=Notification.js.map