import React, { useState, useRef, useEffect } from 'react';
import { SVG } from '../utils';
import './Input.scss';
import iconEyeOpen from 'src/assets/svg/eye_open.svg';
import iconEyeClose from 'src/assets/svg/eye_close.svg';
import { withNaming } from '@bem-react/classname';
import { IInput } from 'interfaces';
import cs from 'classnames';

const cn = withNaming({ e: '__', m: '--' })('Input');

const Input = React.forwardRef((props: IInput, ref: any) => {
  const [type, setType] = useState('text');
  const [touched, setTouched] = useState(false);

  const {
    submitted,
    label,
    className,
    value,
    onChange,
    onFocus,
    onBlur,
    error,
    disabled,
    placeholder,
    children,
    name,
    icon,
    ...otherProps
  }: any = props;

  useEffect(() => setType(otherProps.type || 'text'), []);

  const togglePassword = () => {
    setType(type === 'text' ? 'password' : 'text');
  };

  const _onChange = (event: any) => {
    if (onChange) {
      onChange(event);
    }
  };

  const _onFocus = (event: any) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const _onBlur = (event: any) => {
    setTouched(true);
    if (onBlur) {
      onBlur(event);
    }
  };

  const _value = (children && children.toString()) || value;

  const meta: any = { password: otherProps.type === 'password' };

  return (
    <label
      className={`Input ${(error && touched) || (submitted && error) ? cn('error') : ''}`}
      ref={ref}
    >
      {label && <span className={cn('title')}>{label}</span>}
      <div className={cn('input')}>
        {icon && <div className={cn('meta')}>{icon}</div>}
        <input
          {...otherProps}
          ref={ref}
          type={type}
          value={_value}
          onChange={_onChange}
          onFocus={_onFocus}
          onBlur={_onBlur}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          className={cs(otherProps.className, { 'Input__input-icon': icon })}
        />
        <div
          className={`${cn('input-border')} ${
            (error && touched) || (submitted && error) ? cn('error-border') : ''
          }`}
        />
        {meta.password && (
          <div className={cn('meta')}>
            {meta.password && (
              <SVG
                onClick={togglePassword}
                className="SVG"
                src={type === 'password' ? iconEyeOpen : iconEyeClose}
              />
            )}
          </div>
        )}
      </div>
      {(error && touched) || (submitted && error) ? (
        <p className={`${(error && touched) || (submitted && error) ? cn('error-message') : ''}`}>
          {error}
        </p>
      ) : (
        ''
      )}
    </label>
  );
});

export default Input;
