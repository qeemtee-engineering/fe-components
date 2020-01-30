import React from 'react';
import { ICurrency } from 'interfaces';
import cs from 'classnames';

import './Currency.scss';
import Number from '../Number';

const Currency = React.forwardRef((props: ICurrency, ref: any) => {
  const { className, symbol, symbolClassName, value, fixed, side, delimiter, ...other } = props;

  const classes = cs('Currency', className);
  const symbolClasses = symbolClassName
    ? cs('symbol right ', symbolClassName)
    : `symbol right size`;

  const _symbol = symbol || '฿';

  return (
    <span className={classes}>
      {side === 'left' && <span className="symbol left">{_symbol}</span>}
      <Number {...other} value={value} fixed={fixed} delimiter={delimiter} ref={ref} />
      {side !== 'left' && <span className={symbolClasses}>{_symbol}</span>}
    </span>
  );
});

export default Currency;
