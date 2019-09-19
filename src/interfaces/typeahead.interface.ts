export interface TypeAheadProps {
  options: Array<any>;
  value: any;
  labelKey: string;
  valueKey: string;
  isMulti: boolean;
  onChange: Function;
}

export interface TypeAheadState {
  optionsToPass: Array<any>;
  valuesToPass: any;
}
