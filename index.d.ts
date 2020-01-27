import {
  ISVG,
  IModal,
  IButton,
  ITable,
  IInput,
  ITranslateProvider,
  ITranslateConnect,
  IOverlayComponent,
  ICheckbox,
  INotification,
  IIcon,
  CollapseProps,
  INumber,
  ICurrency,
  IRichtext,
  IFileUploader,
  IRadio,
  NotificationApi,
} from './src/interfaces';
export function SVG(props: ISVG): any;
export function Modal(props: IModal): any;
export function Button(props: IButton): any;
export function Table(props: ITable): any;
export function Input(props: IInput): any;
export function useForm(validate: (values: object) => object): any;
export function TranslateProvider(props: ITranslateProvider): any;
export function TranslateConnect(props: ITranslateConnect): any;
export function LanguageSwitch(): any;
export class TypeAhead {}
export class PhoneNumber {}
export function OverlayComponent(props: IOverlayComponent): any;
export function Checkbox(props: ICheckbox): any;
export function Switch(props: ICheckbox): any;
export function Icon(props: IIcon): any;
export const Notification: NotificationApi;
export function Collapse(props: CollapseProps): any;
export function Number(props: INumber): any;
export function Currency(props: ICurrency): any;
export function Richtext(props: IRichtext): any;
export function DatePicker(props: any): any;
export function FileUploader(props: IFileUploader): any;
export function Radio(props: IRadio): any;
