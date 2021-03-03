import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

interface OperationLogMold {
  description: string;
  operatedAt: string;
}

const OperationLogs: React.FC = (): JSX.Element => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4 className="mt-5">操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog: OperationLogMold, index: number) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
