import { MouseEvent } from 'react';

export interface IOverlayComponent {
  image?: string;
  className?: string;
  title: string;
  action?(e: MouseEvent<HTMLElement>): void;
  actionText?: string;
}
