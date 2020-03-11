import React from 'react';
import LoaderContainer from './modules/loader/index';
import TodoContainer from './modules/todo/index';
import ErrorContainer from './modules/errors/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoaderContainer />
      <TodoContainer />
      <ErrorContainer />
    </div>
  );
}

export default App;
