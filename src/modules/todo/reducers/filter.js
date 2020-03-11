import {
  FILTER_TODO_SUCCESS,
} from '../constants/actionTypes';
/**
 * Save the active filter to store
 */
const filter = (state = 'SHOW ALL', action) => {
  switch (action.type) {
    case FILTER_TODO_SUCCESS:
      return action.payload.filter;
    default:
      return state;
  }
};

export default filter;
