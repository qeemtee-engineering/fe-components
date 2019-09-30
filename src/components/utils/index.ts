export { default as SVG } from './SVG';
export * from './scroll';
export * from './language';
export * from './phoneNumber';

export const numWithCommas = (val: number | string, delimiter = ',') => {
  return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};
