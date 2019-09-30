import { INumber } from './number.interface';

export interface ICurrency extends INumber {
  symbol?: string;
  side?: 'left' | 'right';
}
