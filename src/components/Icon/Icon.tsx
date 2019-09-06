import React, { FC } from 'react';
import cx from 'classnames';
import { IIcon } from 'interfaces';

const Icon: FC<IIcon> = ({ className = '', containerClasses = '', color, icon }) => {
  return (
    <div className={cx('icon-container', containerClasses)}>
      <span style={{ color }} className={cx(className, 'material-icons')}>
        {icon}
      </span>
    </div>
  );
};

export default Icon;
