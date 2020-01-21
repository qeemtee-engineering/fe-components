export interface IRichtext {
  label?: string;
  value?: any;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  submitted?: boolean;
}
