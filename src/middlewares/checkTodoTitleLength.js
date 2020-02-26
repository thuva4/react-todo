import { ADD_TODO_SUCCESS, ADD_TODO_ERROR } from '../constants/actionTypes';
import {
  TODO_TITLE_LENGTH_ERROR_MESSAGE,
  TODO_TITLE_EMPTY_ERROR_MESSAGE,
} from '../constants/messages';

/**
 * Verifies the todo title length, Length should be greater than 0 and
 * less than 500. If not, dispatches an error action.
 */
const checkTodoTitleLength = ({ dispatch }) => (next) => (action) => {
  if (action.type === ADD_TODO_SUCCESS) {
    if (action.payload.title.length > 500) {
      return dispatch({
        type: ADD_TODO_ERROR,
        payload: {
          title: TODO_TITLE_LENGTH_ERROR_MESSAGE,
          id: Math.random(),
        },
      });
    }
    if (action.payload.title.length === 0) {
      return dispatch({
        type: ADD_TODO_ERROR,
        payload: {
          title: TODO_TITLE_EMPTY_ERROR_MESSAGE,
          id: Math.random(),
        },
      });
    }
  }
  return next(action);
};

export default checkTodoTitleLength;
