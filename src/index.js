import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './app/store';
import {Provider} from 'react-redux';
import TodoApp from "./TodoApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <TodoApp />
    </Provider>
  </React.StrictMode>,
);