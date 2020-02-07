import React from 'react';
import cx from 'classnames';
import './Icon.scss';
const Icon = ({ onClick, className = '', containerClasses = '', color, icon, style = {}, }) => {
    return (React.createElement("span", { className: cx('icon-container', containerClasses) },
        React.createElement("span", { onClick: e => {
                onClick && onClick(e);
            }, style: Object.assign({ color }, style), className: cx(className, 'material-icons') }, icon)));
};
export default Icon;
//# sourceMappingURL=Icon.js.map