import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
    {/* <h1>Hello</h1> */}
  </Provider>
);

export default App;
