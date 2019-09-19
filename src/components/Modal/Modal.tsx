import React, { FC } from 'react';
import Dialog from 'rc-dialog';
import { withNaming } from '@bem-react/classname';
import './Modal.scss';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { IModal } from 'interfaces';
import Button from '../Button';
const cn = withNaming({ e: '__', m: '-' })('Modal');
let mousePosition: { x: number; y: number } | undefined;

const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };
  setTimeout(() => (mousePosition = undefined), 100);
};

if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListener(document.documentElement, 'click', getClickPosition);
}

const Modal: FC<IModal> = props => {
  const className = `${props.wrapClassName || ''} ${props.centered ? 'Modal-center' : ''}`.trim();

  const handleCancel = (e: React.SyntheticEvent) => {
    const { onCancel } = props;
    if (onCancel) {
      onCancel(e);
    }
  };

  const handleOk = (e: React.SyntheticEvent) => {
    const { onOk } = props;
    if (onOk) {
      onOk(e);
    }
  };

  const renderFooter = () => {
    return (
      <div className={cn('footer')}>
        <Button color="reject" layout="outline" className={cn('cancel')} onClick={handleCancel}>
          {props.cancelText || 'Cancel'}
        </Button>
        <Button color="success" className={cn('ok')} onClick={handleOk}>
          {props.okText || 'Confirm'}
        </Button>
      </div>
    );
  };

  const renderModal = () => {
    const { footer, visible, centered, showFooter = true, ...restProps } = props;
    return (
      <Dialog
        {...restProps}
        footer={showFooter ? (footer === undefined ? renderFooter() : footer) : null}
        visible={visible}
        prefixCls={cn()}
        wrapClassName={className}
        mousePosition={mousePosition}
        onClose={handleCancel}
        animation="zoom"
        maskAnimation="fade"
      />
    );
  };

  return renderModal();
};

export default Modal;
