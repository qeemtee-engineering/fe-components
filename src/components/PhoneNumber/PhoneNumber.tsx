import React, { Component } from 'react';
import { PhoneNumberProps, PhoneNumberState } from 'interfaces';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumber.scss';

export default class PhoneNumber extends Component<PhoneNumberProps, PhoneNumberState> {
  constructor(props: PhoneNumberProps) {
    super(props);
    this.state = {
      valueToPass: { phone: '' },
    };
  }

  emitChange(selected: any) {
    this.props.onChange(selected);
  }

  componentWillMount() {
    if (this.props.value) {
      this.setState({ valueToPass: { phone: this.props.value } });
    }
  }

  render() {
    return (
      <PhoneInput
        placeholder={this.props.placeholder}
        value={this.state.valueToPass}
        international={this.props.international}
        displayInitialValueAsLocalNumber={this.props.displayInitialValueAsLocalNumber}
        countryOptions={this.props.countryOptions}
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
