import cs from 'classnames';
import * as React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { PhoneNumberProps } from '../interfaces';
import './PhoneNumber.scss';

const PhoneNumber: React.FC<PhoneNumberProps> = ({ hasContact, ...props }) => {
  const emitChange = (selected: any) => {
    props.onChange(selected);
  };

  return (
    <PhoneInput
      {...props}
      onChange={emitChange}
      className={cs(
        'react-input-custom-width',
        props.className,
        !hasContact
          ? 'error-react-phone-number-input react-phone-number-input-padding'
          : 'react-phone-number-input-padding'
      )}
    />
  );
};

export default PhoneNumber;
