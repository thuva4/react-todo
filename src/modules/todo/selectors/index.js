import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING } from '../constants';

const getTodoFilter = (state) => state.filter;
const getTodoList = (state) => state.todoList;

/**
 * Selector function to perform the filtering on the todo list based
 * on the filtering criteria
 */
export const getVisibleTodoList = createSelector(
  [getTodoFilter, getTodoList],
  (filter, todoList) => {
    switch (filter) {
      case SHOW_ALL:
        return todoList;
      case SHOW_COMPLETED:
        return todoList.filter((t) => t.get('isCompleted'));
      case SHOW_PENDING:
        return todoList.filter((t) => !t.get('isCompleted'));
      default:
        return todoList;
    }
  },
);

/**
 * Selector function to calculate the count of all, completed and pending
 * todo.
 */
export const getTodoListCounts = createSelector([getTodoList], (todoList) => {
  const all = todoList.size;
  const completed = todoList.filter((t) => t.get('isCompleted')).size;
  const pending = all - completed;
  return Map({
    all,
    completed,
    pending,
  });
});
