import React, { MouseEvent } from 'react';

export interface IIcon {
  containerClasses?: string;
  className?: string;
  color?: string;
  icon: string;
  onClick?(e: MouseEvent<HTMLElement>): void;
  style?: React.CSSProperties;
}
