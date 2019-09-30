import React from 'react';

export type ExpandIconPosition = 'left' | 'right';

export interface PanelProps {
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  disabled?: boolean;
  extra?: React.ReactNode;
}

export interface CollapseProps {
  activeKey?: Array<string | number> | string | number;
  defaultActiveKey?: Array<string | number> | string | number;
  accordion?: boolean;
  destroyInactivePanel?: boolean;
  onChange?: (key: string | string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  expandIcon?: (panelProps: PanelProps) => React.ReactNode;
  expandIconPosition?: ExpandIconPosition;
}

export interface CollapsePanelProps {
  key: string | number;
  header: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  id?: string;
  extra?: React.ReactNode;
}
