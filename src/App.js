import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Search from './screens/Search';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pokemon</h1>
        <Search />
      </div>
    </Provider>
  );
}

export default App;
