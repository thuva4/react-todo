import { combineReducers } from 'redux';
import todoList from './todo';
import toasts from './toasts';
import loader from './loader';
import filter from './filter';

export default combineReducers({
  todoList,
  toasts,
  loader,
  filter
});
