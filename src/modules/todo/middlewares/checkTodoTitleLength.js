import { ADD_TODO_SUCCESS } from '../constants/actionTypes';
import { addTodoEmptyTitleError, addTodoLengthLimitError } from '../../errors/actions';
/**
 * Verifies the todo title length, Length should be greater than 0 and
 * less than 500. If not, dispatches an error action.
 */
const checkTodoTitleLength = ({ dispatch }) => (next) => (action) => {
  if (action.type === ADD_TODO_SUCCESS) {
    if (action.payload.title.length > 500) {
      return dispatch(addTodoLengthLimitError());
    }
    if (action.payload.title.length === 0) {
      return dispatch(addTodoEmptyTitleError());
    }
  }
  return next(action);
};

export default checkTodoTitleLength;
