import React from 'react';

export type IconType = 'success' | 'info' | 'error' | 'warning';
export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface INotification {
  message: React.ReactNode;
  description?: React.ReactNode;
  btn?: React.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React.ReactNode;
  placement?: NotificationPlacement;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  readonly type?: IconType;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  getContainer?: () => HTMLElement;
}
