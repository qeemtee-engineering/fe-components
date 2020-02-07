import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Phone.css';
export default class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueToPass: '',
        };
    }
    emitChange(selected) {
        this.props.onChange(selected);
    }
    render() {
        const otherProps = Object.assign({}, this.props);
        delete otherProps.hasContact;
        return (React.createElement(PhoneInput, Object.assign({}, otherProps, { value: this.props.value, onChange: (phone) => this.emitChange(phone), inputClassName: !this.props.hasContact
                ? 'error-react-phone-number-input react-phone-number-input-padding'
                : 'react-phone-number-input-padding', className: this.props.className ? 'react-input-custom-width' : '' })));
    }
}
//# sourceMappingURL=Phone.js.map