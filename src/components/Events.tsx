import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

interface EventMold {
  id: number;
  body: string;
  title: string;
}

const Events: React.FC<{}> = (): JSX.Element => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event: EventMold, index: number) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
