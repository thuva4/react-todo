/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import checkTodoTitleLength from '../middlewares/checkTodoTitleLength';


import todo from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, checkTodoTitleLength),
  ),
);

sagaMiddleware.run(todo);

export default store;
