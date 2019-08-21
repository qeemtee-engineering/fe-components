import { isValidPhoneNumber, parsePhoneNumber} from 'react-phone-number-input';

export const checkPhoneNumberValidity = isValidPhoneNumber;
export const getPassedPhoneNumber = parsePhoneNumber;