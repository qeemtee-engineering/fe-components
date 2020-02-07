import React, { MouseEvent, ReactNode } from 'react';

interface Element extends React.HTMLProps<any> {
  disabled?: boolean;
  className?: string;
  id?: string;
  onClick?(e: MouseEvent<HTMLElement>): void;
}

export interface IButton extends Element {
  children: ReactNode;
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'success' | 'reject';
  layout?: 'solid' | 'outline';
}
