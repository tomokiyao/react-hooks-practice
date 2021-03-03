import React from 'react';

interface Props {
  operationLog: {
    description: string;
    operatedAt: string;
  };
}

const OperationLog: React.FC<Props> = ({ operationLog }): JSX.Element => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
