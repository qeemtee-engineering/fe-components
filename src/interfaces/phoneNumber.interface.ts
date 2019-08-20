export interface PhoneNumberProps {
    placeholder: string,
    value: string,
    international: boolean
    displayInitialValueAsLocalNumber: boolean,
    countryOptions: Array<any>,
    onChange: Function
    hasContact: boolean
    className?: string
};

export interface PhoneNumberState {
    valueToPass: any
}