import { ADD_TODO_ERROR, REMOVE_TOAST } from './constants/actionTypes';
import { TODO_TITLE_LENGTH_ERROR_MESSAGE, TODO_TITLE_EMPTY_ERROR_MESSAGE } from './constants/messages';
/**
 * handles the filter todo list Success event
 */
const addTodoLengthLimitError = () => ({
  type: ADD_TODO_ERROR,
  payload: {
    title: TODO_TITLE_LENGTH_ERROR_MESSAGE,
    id: Math.random(),
  },
});

/**
   * handles the set isLoading event
   */
const addTodoEmptyTitleError = () => ({
  type: ADD_TODO_ERROR,
  payload: {
    title: TODO_TITLE_EMPTY_ERROR_MESSAGE,
    id: Math.random(),
  },
});

/**
 * handles the remove toast event
 */
const removeToast = (payload) => ({
  type: REMOVE_TOAST,
  payload,
});

export {
  addTodoLengthLimitError,
  addTodoEmptyTitleError,
  removeToast,
};
