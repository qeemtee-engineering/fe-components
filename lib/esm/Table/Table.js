import { withNaming } from '@bem-react/classname';
import React from 'react';
import './Table.css';
const cn = withNaming({ e: '__', m: '-' })('Table');
const Table = ({ head, body }) => {
    return (React.createElement("div", { className: cn() },
        React.createElement("div", { className: cn('content') },
            React.createElement("div", { className: cn('body') },
                React.createElement("table", null,
                    React.createElement("thead", { className: cn('head') },
                        React.createElement("tr", null, head.map((item, index) => (React.createElement("th", { style: { minWidth: item.width ? item.width : '' }, key: index }, item.title))))),
                    React.createElement("tbody", { className: cn('body') }, body.map((row, index) => (React.createElement("tr", { key: index }, row.map((cell, i) => (React.createElement("td", { key: i }, cell))))))))))));
};
export default Table;
//# sourceMappingURL=Table.js.map