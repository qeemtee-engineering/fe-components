import React from 'react';
import './OverlayComponent.scss';
import Button from '../Button';
import { withNaming } from '@bem-react/classname';
const cn = withNaming({ e: '__', m: '-' })('OverlayComponent');
const OverlayComponent = ({ className = '', image, title, action, actionText, }) => {
    const classes = `${cn('')} ${className}`.trim();
    return (React.createElement("div", { className: classes },
        React.createElement("div", { className: cn('image') }, image && React.createElement("img", { src: image, alt: "img" })),
        title && React.createElement("p", { className: cn('title') }, title),
        action && actionText ? (React.createElement(Button, { color: "secondary", onClick: action }, actionText)) : null));
};
export default OverlayComponent;
//# sourceMappingURL=OverlayComponent.js.map