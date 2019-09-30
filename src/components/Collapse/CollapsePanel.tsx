import * as React from 'react';
import RcCollapse from 'rc-collapse';
import classNames from 'classnames';
import { CollapsePanelProps } from 'interfaces';

export default class CollapsePanel extends React.Component<CollapsePanelProps, {}> {
  renderCollapsePanel = () => {
    const { className = '', showArrow = true } = this.props;
    const collapsePanelClassName = classNames(
      {
        ['Collapse-no-arrow']: !showArrow,
      },
      className
    );
    return <RcCollapse.Panel {...this.props} className={collapsePanelClassName} />;
  };

  render() {
    return <>{this.renderCollapsePanel()}</>;
  }
}
