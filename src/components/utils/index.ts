export { default as SVG } from './SVG';
export * from './scroll';
export * from './language';
export * from './phoneNumber';

export const numWithCommas = (val: number | string, delimiter = ',') => {
  return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};

export const getDataOrAriaProps = (props: any) => {
  return Object.keys(props).reduce((prev: any, key: string) => {
    if (
      (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') &&
      key.substr(0, 7) !== 'data-__'
    ) {
      prev[key] = props[key];
    }
    return prev;
  }, {});
};
