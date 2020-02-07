import React, { Component } from 'react';
import { PhoneNumberProps, PhoneNumberState } from '../interfaces';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumber.scss';

export default class PhoneNumber extends Component<PhoneNumberProps, PhoneNumberState> {
  constructor(props: PhoneNumberProps) {
    super(props);
    this.state = {
      valueToPass: '',
    };
  }

  emitChange(selected: any) {
    this.props.onChange(selected);
  }

  render() {
    const otherProps = { ...this.props };
    delete otherProps.hasContact;
    return (
      <PhoneInput
        {...otherProps}
        value={this.props.value}
        onChange={(phone: any) => this.emitChange(phone)}
        inputClassName={
          !this.props.hasContact
            ? 'error-react-phone-number-input react-phone-number-input-padding'
            : 'react-phone-number-input-padding'
        }
        className={this.props.className ? 'react-input-custom-width' : ''}
      />
    );
  }
}
