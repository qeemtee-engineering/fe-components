import classNames from 'classnames';
import * as React from 'react';

export interface CheckableTagProps {
  className?: string;
  style?: React.CSSProperties;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

export default class CheckableTag extends React.Component<CheckableTagProps> {
  handleClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  };

  renderCheckableTag = () => {
    const { className, checked, ...restProps } = this.props;
    const prefixCls = 'Tag';
    const cls = classNames(
      prefixCls,
      {
        [`${prefixCls}-checkable`]: true,
        [`${prefixCls}-checkable-checked`]: checked,
      },
      className
    );

    delete (restProps as any).onChange; // TypeScript cannot check delete now.
    return <span {...(restProps as any)} className={cls} onClick={this.handleClick} />;
  };

  render() {
    return this.renderCheckableTag();
  }
}
