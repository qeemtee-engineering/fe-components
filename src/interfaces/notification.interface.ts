import React from 'react';

export type IconType = 'success' | 'info' | 'error' | 'warning';
export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface NotificationApi {
  success(args: INotification): void;
  error(args: INotification): void;
  info(args: INotification): void;
  warn(args: INotification): void;
  warning(args: INotification): void;
  open(args: INotification): void;
  close(key: string): void;
  config(options: ConfigProps): void;
  destroy(): void;
}

export interface ConfigProps {
  top?: number;
  bottom?: number;
  duration?: number;
  placement?: NotificationPlacement;
  getContainer?: () => HTMLElement;
}

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
