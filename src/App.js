import React from 'react';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreator';
import ToastMessages from './components/ToastMessages';
import TodoFilter from './components/TodoFilter';
import TodoListCount from './components/TodoListCount';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <TodoListCount />
      <TodoCreator />
      <TodoFilter />
      <TodoList />
      <ToastMessages />
    </div>
  );
}

export default App;
