import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../Icon';
import CheckableTag from './CheckableTag';
import { PresetColorTypes } from '../utils/colors';
import warning from '../utils/warning';
import './Tag.scss';
export { CheckableTagProps } from './CheckableTag';
import { TagProps } from '../interfaces';

interface TagState {
  visible: boolean;
}

const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);

class Tag extends React.Component<TagProps, TagState> {
  static CheckableTag = CheckableTag;

  static defaultProps = {
    closable: false,
  };

  static getDerivedStateFromProps(nextProps: TagProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible,
      };
    }
    return null;
  }

  state = {
    visible: true,
  };

  constructor(props: TagProps) {
    super(props);
    warning(
      !('afterClose' in props),
      'Tag',
      "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."
    );
  }

  getTagStyle() {
    const { color, style } = this.props;
    const isPresetColor = this.isPresetColor();
    return {
      backgroundColor: color && !isPresetColor ? color : undefined,
      ...style,
    };
  }

  getTagClassName() {
    const { className, color } = this.props;
    const { visible } = this.state;
    const isPresetColor = this.isPresetColor();
    const prefixCls = 'Tag';
    return classNames(
      prefixCls,
      {
        [`${prefixCls}-${color}`]: isPresetColor,
        [`${prefixCls}-has-color`]: color && !isPresetColor,
        [`${prefixCls}-hidden`]: !visible,
      },
      className
    );
  }

  setVisible(visible: boolean, e: React.MouseEvent<HTMLElement>) {
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

  handleIconClick = (e: React.MouseEvent<HTMLElement>) => {
    this.setVisible(false, e);
  };

  isPresetColor(): boolean {
    const { color } = this.props;
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color);
  }

  renderCloseIcon() {
    const { closable } = this.props;
    return closable ? (
      <Icon icon="close" className="Tag-close" onClick={this.handleIconClick} />
    ) : null;
  }

  renderTag = () => {
    const { children, ...otherProps } = this.props;
    const tagProps = omit(otherProps, [
      'onClose',
      'afterClose',
      'color',
      'visible',
      'closable',
      'prefixCls',
    ]);
    return (
      <span {...tagProps} className={this.getTagClassName()} style={this.getTagStyle()}>
        {children}
        {this.renderCloseIcon()}
      </span>
    );
  };

  render() {
    return this.renderTag();
  }
}

polyfill(Tag);

export default Tag;
