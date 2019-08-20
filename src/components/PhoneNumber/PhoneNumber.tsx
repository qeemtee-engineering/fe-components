import React, { Component } from 'react';
import { PhoneNumberProps } from 'interfaces';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumber.scss';

export default class PhoneNumber extends Component<
  PhoneNumberProps
> {
  constructor(props: PhoneNumberProps) {
    super(props);
  }

  emitChange(selected: any) {
    this.props.onChange(selected.phone);
  }

  render() {
    return (
        <PhoneInput
        placeholder={this.props.placeholder}
        value={this.props.value}
        international={this.props.international}
        displayInitialValueAsLocalNumber={this.props.displayInitialValueAsLocalNumber}
        countryOptions={this.props.countryOptions}
        onChange= { (phone: any) => this.emitChange({ phone }) }
        inputClassName={!this.props.hasContact ? 'error-react-phone-number-input react-phone-number-input-padding': 'react-phone-number-input-padding'}
      /> 
    );
  }
}
