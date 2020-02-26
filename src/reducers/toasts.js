import { List, Map } from 'immutable';
import { ADD_TODO_ERROR, REMOVE_TOAST } from '../constants/actionTypes';

/** 
 * Sets the error messages in the Store
 */
const toastList = (state = List(), action) => {
  switch (action.type) {
    case ADD_TODO_ERROR:
      return state.push(
        Map({
          ...action.payload,
        }),
      );
    case REMOVE_TOAST:
      return state.filter((toast) => toast.get('id') !== action.payload.id);
    default:
      return state;
  }
};

export default toastList;
