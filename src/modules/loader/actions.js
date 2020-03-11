import SET_IS_LOADING from './constants/actionTypes';
/**
 * handles the set isLoading event
 */
const setLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

export default setLoading;
