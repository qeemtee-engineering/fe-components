export * from './scroll';
export * from './phoneUtils';
export const numWithCommas = (val, delimiter = ',') => {
    return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};
export const getDataOrAriaProps = (props) => {
    return Object.keys(props).reduce((prev, key) => {
        if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') &&
            key.substr(0, 7) !== 'data-__') {
            prev[key] = props[key];
        }
        return prev;
    }, {});
};
let lastId = 0;
export function newId(prefix = 'id') {
    lastId++;
    return `${prefix}${lastId}`;
}
//# sourceMappingURL=index.js.map