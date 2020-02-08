import React, { FC } from 'react';
import cx from 'classnames';
import { IIcon } from '../interfaces';
import './Icon.scss';

const Icon: FC<IIcon> = ({
  onClick,
  className = '',
  containerClasses = '',
  color,
  icon,
  style = {},
}) => {
  return (
    <span className={cx('icon-container', containerClasses)}>
      <span
        onClick={e => {
          onClick && onClick(e);
        }}
        style={{ color, ...style }}
        className={cx(className, 'material-icons')}
      >
        {icon}
      </span>
    </span>
  );
};

export default Icon;
