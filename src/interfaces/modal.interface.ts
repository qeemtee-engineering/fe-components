export interface IModal {
  className?: string;
  visible: boolean;
  title?: React.ReactNode | string;
  onCancel: Function;
  cancelText?: string;
  okText?: string;
  onOk?: Function;
  footer?: React.ReactNode;
  children: React.ReactChild;
  centered?: boolean;
  maskClosable?: boolean;
  showFooter?: boolean;
  wrapClassName?: string;
}
