export interface PhoneNumberProps {
    placeholder: string,
    value: string,
    international: boolean
    displayInitialValueAsLocalNumber: boolean,
    countryOptions: Array<any>,
    onChange: Function
    inputClassName: string,
    hasContact: boolean
};

export interface PhoneNumberState {
    valuesToPass: any
}