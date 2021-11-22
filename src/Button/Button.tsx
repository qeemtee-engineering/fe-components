import { withNaming } from '@bem-react/classname';
import React from 'react';

import { IButton } from '../interfaces';
import './Button.scss';

const cn = withNaming({ e: '__', m: '-' })('Button');

const Button = (props: IButton) => {
  const {
    label,
    children,
    className,
    type,
    disabled,
    color = 'primary',
    layout = 'solid',
    ...other
  } = props;

  const classes = `${cn('', {
    color,
    layout,
  })} ${className}`.trim();

  return (
    <button {...other} type={type || 'button'} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
