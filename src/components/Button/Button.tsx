import React from 'react';
import { withNaming } from '@bem-react/classname';
import { SVG } from '../utils';
import './Button.scss';
import { IButton } from 'interfaces';
import iconSpinner from 'assets/svg/spinner.svg';

const cn = withNaming({ e: '__', m: '-' })('Button');

const Button = (props: IButton) => {
  const {
    label,
    children,
    icon,
    loading,
    className,
    type,
    disabled,
    color = 'primary',
    layout = 'solid',
    ...other
  } = props;

  const classes = `${cn('', {
    loading,
    color,
    layout,
  })} ${className}`.trim();

  return (
    <button {...other} type={type || 'button'} disabled={loading || disabled} className={classes}>
      {icon && <SVG wrapper="span" className={`${cn('icon')} ${cn('SVG')}`} src={icon} />}
      {children}
      {loading && (
        <SVG wrapper="span" className={`${cn('spinner')} ${cn('SVG')}`} src={iconSpinner} />
      )}
    </button>
  );
};

export default Button;
