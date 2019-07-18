import React from 'react';

interface Element extends React.HTMLProps<HTMLInputElement> {
  disabled?: boolean;
  className?: string;
  id?: string;
}

export interface IInput extends Element {
  label?: string;
  value?: string | number;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  error?: string;
}
