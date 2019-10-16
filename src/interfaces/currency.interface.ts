import { INumber } from './number.interface';

export interface ICurrency extends INumber {
  symbol?: string;
  symbolClassName?: string;
  side?: 'left' | 'right';
}
