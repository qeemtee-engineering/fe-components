import React, { Component } from 'react';
import { PhoneNumberProps, PhoneNumberState } from 'interfaces';
import 'react-phone-number-input/style.css';
const PhoneInput = require('react-phone-number-input').PhoneInput;
import './PhoneNumber.scss';

export default class PhoneNumber extends Component<
  PhoneNumberProps,
  PhoneNumberState
> {
  constructor(props: PhoneNumberProps) {
    super(props);
    this.state = {
      valuesToPass: null
    };
  }

  emitChange(selected: any) {
    this.props.onChange(selected);
    this.setState({ valuesToPass: selected });
  }

  render() {
    return (
        <PhoneInput
        placeholder={this.props.placeholder}
        value={this.state.valuesToPass}
        international={this.props.international}
        displayInitialValueAsLocalNumber={this.props.displayInitialValueAsLocalNumber}
        countryOptions={this.props.countryOptions}
        onChange= { (phone: any) => this.emitChange({ phone }) }
        inputClassName={!this.props.hasContact ? 'error-react-phone-number-input react-phone-number-input-padding': 'react-phone-number-input-padding'}
      /> 
    );
  }
}
