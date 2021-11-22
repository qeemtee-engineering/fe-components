import classNames from 'classnames';
import RcCollapse from 'rc-collapse';
import React, { Component } from 'react';

import Icon from '../Icon';
import { CollapseProps, PanelProps } from '../interfaces';
import './Collapse.scss';
import CollapsePanel from './CollapsePanel';

export default class Collapse extends Component<CollapseProps> {
  static Panel = CollapsePanel;

  static defaultProps = {
    bordered: true,
    // openAnimation: { ...animation, appear() {} },
    expandIconPosition: 'left',
  };

  renderExpandIcon = (panelProps: PanelProps = {}) => {
    const { expandIcon } = this.props;
    const icon = expandIcon ? (
      expandIcon(panelProps)
    ) : (
      <Icon
        icon="keyboard_arrow_right"
        style={{
          transform: panelProps.isActive ? 'rotate(90deg)' : undefined,
          top: panelProps.isActive ? 'unset' : '50%',
        }}
      />
    );
    return React.isValidElement(icon)
      ? React.cloneElement(icon as any, {
          className: `Collapse-arrow`,
        })
      : icon;
  };

  renderCollapse = () => {
    const { className = '', bordered, expandIconPosition } = this.props;
    const collapseClassName = classNames(
      {
        ['Collapse-borderless']: !bordered,
        [`Collapse-icon-position-${expandIconPosition}`]: true,
      },
      className
    );
    return (
      <RcCollapse
        {...this.props}
        prefixCls="Collapse"
        expandIcon={(panelProps: PanelProps) => this.renderExpandIcon(panelProps)}
        className={collapseClassName}
      />
    );
  };

  render() {
    return this.renderCollapse();
  }
}
