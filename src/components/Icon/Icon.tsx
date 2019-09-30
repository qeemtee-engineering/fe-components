import React, { FC } from 'react';
import cx from 'classnames';
import { IIcon } from 'interfaces';

const Icon: FC<IIcon> = ({ className = '', containerClasses = '', color, icon, style = {} }) => {
  return (
    <div className={cx('icon-container', containerClasses)}>
      <span style={{ color, ...style }} className={cx(className, 'material-icons')}>
        {icon}
      </span>
    </div>
  );
};

export default Icon;
