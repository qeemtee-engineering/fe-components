import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  color?: string;
  closable?: boolean;
  visible?: boolean;
  onClose?: Function;
  afterClose?: Function;
  style?: React.CSSProperties;
}
