import React, { ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
  disabled?: boolean;
  className?: string;
  id?: string;
}

export interface ICheckbox extends Element {
  label?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
  color?: 'primary' | 'secondary';
  checked?: boolean;
  children?: ReactNode;
}
