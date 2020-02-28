import { List, Map } from 'immutable';
import {
  ADD_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_ALL_TODO_SUCCESS,
} from '../constants/actionTypes';

/**
 * Add, delete, update and filter actions on todoList
 */
const todoList = (state = List(), action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return state.push(
        Map({
          ...action.payload,
          isCompleted: false,
        }),
      );
    case COMPLETE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.get('id') === action.payload.id) {
          return todo.update('isCompleted', (v) => !v);
        }
        return todo;
      });
    case DELETE_TODO_SUCCESS:
      return state.filter((todo) => todo.get('id') !== action.payload.id);
    case DELETE_ALL_TODO_SUCCESS:
      return state.clear();
    default:
      return state;
  }
};

export default todoList;
