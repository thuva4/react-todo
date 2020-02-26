import { put, takeEvery, all } from 'redux-saga/effects';
import {
  ADD_TODO_REQUESTED,
  COMPLETE_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
  DELETE_ALL_TODO_REQUESTED,
  FILTER_TODO_REQUESTED,
} from '../constants/actionTypes';

import {
  addTodoSuccess,
  removeTodoSuccess,
  removeAllTodoSuccess,
  filterTodoSuccess,
  setLoading,
  completeTodoSuccess,
} from '../actions/index';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* addTodoAsync(action) {
  yield put(setLoading(true));
  yield delay(1000);
  yield put(addTodoSuccess(action.payload));
  yield put(setLoading(false));
}

export function* completeTodo(action) {
  yield put(setLoading(true));
  yield delay(1000);
  yield put(completeTodoSuccess(action.payload));
  yield put(setLoading(false));
}

export function* deleteTodo(action) {
  yield put(setLoading(true));
  yield delay(1000);
  yield put(removeTodoSuccess(action.payload));
  yield put(setLoading(false));
}

export function* deleteAllTodo(action) {
  yield put(setLoading(true));
  yield delay(1000);
  yield put(removeAllTodoSuccess(action.payload));
  yield put(setLoading(false));
}

export function* filterTodo(action) {
  yield put(setLoading(true));
  yield delay(1000);
  yield put(filterTodoSuccess(action.payload));
  yield put(setLoading(false));
}

export default function* rootSaga() {
  yield all([
    takeEvery(ADD_TODO_REQUESTED, addTodoAsync),
    takeEvery(COMPLETE_TODO_REQUESTED, completeTodo),
    takeEvery(DELETE_TODO_REQUESTED, deleteTodo),
    takeEvery(DELETE_ALL_TODO_REQUESTED, deleteAllTodo),
    takeEvery(FILTER_TODO_REQUESTED, filterTodo),
  ]);
}
