import React, { FC } from 'react';
import './Table.scss';
import { withNaming } from '@bem-react/classname';
import { ITable } from 'interfaces';
const cn = withNaming({ e: '__', m: '-' })('Table');

const Table: FC<ITable> = ({ head, body }) => {
  return (
    <div className={cn()}>
      <div className={cn('content')}>
        <div className={cn('body')}>
          <table>
            <thead className={cn('head')}>
              <tr>
                {head.map((item, index: number) => (
                  <th
                    style={{ minWidth: item.width ? item.width : '' }}
                    key={index}
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={cn('body')}>
              {body.map((row: any, index: number) => (
                <tr key={index}>
                  {row.map((cell: any, i: number) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
