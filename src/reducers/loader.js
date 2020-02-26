import {
  SET_IS_LOADING,
} from '../constants/actionTypes';

/** 
 * Sets the isLoading in the store  
 */
const loader = (state = false, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loader;
