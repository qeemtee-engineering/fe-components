import classNames from 'classnames';
import RcCollapse from 'rc-collapse';
import React, { Component } from 'react';
import Icon from '../Icon';
import './Collapse.css';
import CollapsePanel from './CollapsePanel';
export default class Collapse extends Component {
    constructor() {
        super(...arguments);
        this.renderExpandIcon = (panelProps = {}) => {
            const { expandIcon } = this.props;
            const icon = expandIcon ? (expandIcon(panelProps)) : (React.createElement(Icon, { icon: "keyboard_arrow_right", style: {
                    transform: panelProps.isActive ? 'rotate(90deg)' : undefined,
                    top: panelProps.isActive ? 'unset' : '50%',
                } }));
            return React.isValidElement(icon)
                ? React.cloneElement(icon, {
                    className: `Collapse-arrow`,
                })
                : icon;
        };
        this.renderCollapse = () => {
            const { className = '', bordered, expandIconPosition } = this.props;
            const collapseClassName = classNames({
                ['Collapse-borderless']: !bordered,
                [`Collapse-icon-position-${expandIconPosition}`]: true,
            }, className);
            return (React.createElement(RcCollapse, Object.assign({}, this.props, { prefixCls: "Collapse", expandIcon: (panelProps) => this.renderExpandIcon(panelProps), className: collapseClassName })));
        };
    }
    render() {
        return this.renderCollapse();
    }
}
Collapse.Panel = CollapsePanel;
Collapse.defaultProps = {
    bordered: true,
    expandIconPosition: 'left',
};
//# sourceMappingURL=Collapse.js.map