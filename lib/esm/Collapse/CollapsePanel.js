import * as React from 'react';
import RcCollapse from 'rc-collapse';
import classNames from 'classnames';
export default class CollapsePanel extends React.Component {
    constructor() {
        super(...arguments);
        this.renderCollapsePanel = () => {
            const { className = '', showArrow = true } = this.props;
            const collapsePanelClassName = classNames({
                ['Collapse-no-arrow']: !showArrow,
            }, className);
            return React.createElement(RcCollapse.Panel, Object.assign({}, this.props, { className: collapsePanelClassName }));
        };
    }
    render() {
        return React.createElement(React.Fragment, null, this.renderCollapsePanel());
    }
}
//# sourceMappingURL=CollapsePanel.js.map