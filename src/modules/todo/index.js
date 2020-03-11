import React from 'react';
import TodoListCount from './components/TodoListCount';
import TodoCreator from './components/TodoCreator';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

function TodoListContainer() {
  return (
    <>
      <TodoListCount />
      <TodoCreator />
      <TodoFilter />
      <TodoList />
    </>
  );
}

export default TodoListContainer;
