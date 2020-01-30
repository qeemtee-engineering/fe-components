import React from 'react';
import { SVG } from '../utils';
import { withNaming } from '@bem-react/classname';
import './Checkbox.scss';
import { ICheckbox } from 'interfaces';
import iconSuccess from 'src/assets/svg/success.svg';

const cn = withNaming({ e: '__', m: '-' })('Checkbox');

const Checkbox = React.forwardRef((props: ICheckbox, ref: any) => {
  const {
    label,
    className = '',
    value,
    disabled,
    checked,
    onChange,
    children,
    color = 'primary',
    name,
    required,
    ...other
  } = props;

  const classes = `${cn('', {
    disabled,
    color,
  })} ${className}`.trim();

  return (
    <div className={classes}>
      <label>
        <input
          {...other}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          ref={ref}
        />
        <div className="checkbox">
          <SVG className="SVG icon" src={iconSuccess} />
        </div>
      </label>
      {(children || label) && (
        <span className="label">
          {children || label}
          {required && <span className={cn('required')}>*</span>}
        </span>
      )}
    </div>
  );
});

export default Checkbox;
