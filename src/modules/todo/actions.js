import {
  FILTER_TODO_SUCCESS,
  ADD_TODO_REQUESTED,
  DELETE_ALL_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  COMPLETE_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
  DELETE_ALL_TODO_REQUESTED,
  FILTER_TODO_REQUESTED,
  ADD_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
} from './constants/actionTypes';

/**
 * Saga worker action to handle the add todo event
 */
const addTodoRequested = (payload) => ({ type: ADD_TODO_REQUESTED, payload });

/**
 * handles the add todo success event
 */
const addTodoSuccess = (payload) => ({ type: ADD_TODO_SUCCESS, payload });

/**
 * Saga worker action to handle the remove todo by id event
 */
const removeTodoRequested = (payload) => ({ type: DELETE_TODO_REQUESTED, payload });

/**
 * handles the remove todo by id Success event
 */
const removeTodoSuccess = (payload) => ({ type: DELETE_TODO_SUCCESS, payload });

/**
 * Saga worker action to handle the completed todo by id event
 */
const completeTodoRequested = (payload) => ({ type: COMPLETE_TODO_REQUESTED, payload });

/**
 * handles the completed todo by id Success event
 */
const completeTodoSuccess = (payload) => ({ type: COMPLETE_TODO_SUCCESS, payload });

/**
 * Saga worker action to handle remove all todo event
 */
const removeAllTodoRequested = (payload) => ({
  type: DELETE_ALL_TODO_REQUESTED,
  payload,
});

/**
 * handles the remove all todo by id Success event
 */
const removeAllTodoSuccess = (payload) => ({
  type: DELETE_ALL_TODO_SUCCESS,
  payload,
});

/**
 * Saga worker action to handle filter todo list event
 */
const filterTodoRequested = (payload) => ({
  type: FILTER_TODO_REQUESTED,
  payload,
});

/**
 * handles the filter todo list Success event
 */
const filterTodoSuccess = (payload) => ({
  type: FILTER_TODO_SUCCESS,
  payload,
});

export {
  addTodoSuccess,
  completeTodoSuccess,
  removeTodoSuccess,
  removeAllTodoSuccess,
  filterTodoSuccess,
  removeTodoRequested,
  completeTodoRequested,
  removeAllTodoRequested,
  filterTodoRequested,
  addTodoRequested,
};
