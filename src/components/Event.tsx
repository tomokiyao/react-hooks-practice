import React, { useContext } from 'react';
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

interface Props {
  event: {
    id: number;
    body: string;
    title: string;
  };
}

const Event: React.FC<Props> = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`タイトル：${event.title}を本当に削除しても良いですか？`);
    if (result) {
      dispatch({ type: DELETE_EVENT, id });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント（タイトル：${event.title}）を削除しました`,
        operatedAt: timeCurrentIso8601(),
      });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger mx-2" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;