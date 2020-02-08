import React from 'react';
import { withNaming } from '@bem-react/classname';
import './Button.scss';
import { IButton } from '../interfaces';

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
