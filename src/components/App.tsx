import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const APP_KEY = 'appWithRedux';

interface Event {
  id: number;
  body: string;
  title: string;
}
interface OperationLog {
  description: string;
  operatedAt: string;
}
interface InitialState {
  events: Event[];
  operationLogs: OperationLog[];
}

const App: React.FC<{}> = () => {
  const appState: string | null = localStorage.getItem(APP_KEY);
  const initialState: InitialState = appState
    ? JSON.parse(appState)
    : { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container mt-5">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
