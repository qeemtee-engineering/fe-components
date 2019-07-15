import {
  ISVG,
  IModal,
  IButton,
  ITable,
  IInput,
  ITranslateProvider,
  ITranslateConnect
} from './src/interfaces';
export function SVG(props: ISVG): any;
export function Modal(props: IModal): any;
export function Button(props: IButton): any;
export function Table(props: ITable): any;
export function Input(props: IInput): any;
export function useForm(validate: (values: object) => object): any;
export function TranslateProvider(props: ITranslateProvider): any;
export function TranslateConnect(props: ITranslateConnect): any;
export class TypeAhead {};
