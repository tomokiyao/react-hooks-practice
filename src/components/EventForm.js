import React, { useState, useContext } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChangeTile = (e) => setTitle(e.target.value);
  const handleChangeBody = (e) => setBody(e.target.value);
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle('');
    setBody('');
  };
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };
  const unCleatable = title === '' || body === '';

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={handleChangeTile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={handleChangeBody}
          />
        </div>
        <button className="btn btn-primary mx-2" disabled={unCleatable} onClick={addEvent}>
          イベントを作成する
        </button>
        <button
          className="btn btn-danger mx-2"
          disabled={state.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
