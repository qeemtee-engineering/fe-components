import React from 'react';
import { withNaming } from '@bem-react/classname';

import './Radio.scss';
import { IRadio } from 'interfaces';
const cn = withNaming({ e: '__', m: '-' })('Radio');

const Radio = React.forwardRef((props: IRadio, ref: any) => {
  const {
    className = '',
    name,
    checked,
    light,
    onChange,
    value,
    label,
    children,
    disabled,
    color = 'primary',
    ...other
  } = props;

  const classes = `${cn('', {
    disabled,
    color,
  })} ${className}`.trim();

  return (
    <label className={classes}>
      <input
        {...other}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        ref={ref}
      />
      <div className="radio"></div>
      <span className="label">{children || label || value}</span>
    </label>
  );
});

export default Radio;
