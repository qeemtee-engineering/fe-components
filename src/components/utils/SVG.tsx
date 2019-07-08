import React from 'react';
import { ISVG } from '../../interfaces';

const SVG = (props: ISVG) => {
  const { src, ...other } = props;

  const Wrapper = props.wrapper || 'span';

  return <Wrapper {...other} dangerouslySetInnerHTML={{ __html: src }} />;
};

export default SVG;
