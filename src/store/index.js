/* eslint-disable no-undef */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import filter from '../modules/todo/reducers/filter';
import loader from '../modules/loader/reducers/loader';
import todoList from '../modules/todo/reducers/todo';
import toasts from '../modules/errors/reducers/toasts';
import checkTodoTitleLength from '../modules/todo/middlewares/checkTodoTitleLength';


import saga from '../modules/todo/sagas/index';

const sagaMiddleware = createSagaMiddleware();
const todoRoot = combineReducers({
  filter,
  loader,
  todoList,
  toasts,
});

const store = createStore(
  todoRoot,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, checkTodoTitleLength),
  ),
);

sagaMiddleware.run(saga);

export default store;
