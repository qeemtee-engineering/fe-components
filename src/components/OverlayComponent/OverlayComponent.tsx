import React, { FC } from 'react';
import './OverlayComponent.scss';
import Button from '../Button';
import { IOverlayComponent } from 'interfaces';
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '__', m: '-' })('OverlayComponent');

const OverlayComponent: FC<IOverlayComponent> = ({
  className = '',
  image,
  title,
  action,
  actionText,
}) => {
  const classes = `${cn('')} ${className}`.trim();
  return (
    <div className={classes}>
      <div className={cn('image')}>{image && <img src={image} alt="img" />}</div>
      {title && <p className={cn('title')}>{title}</p>}
      {action && actionText ? (
        <Button color="secondary" onClick={action}>
          {actionText}
        </Button>
      ) : null}
    </div>
  );
};

export default OverlayComponent;
