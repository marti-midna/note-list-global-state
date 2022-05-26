import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Notes from './Notes';
import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
