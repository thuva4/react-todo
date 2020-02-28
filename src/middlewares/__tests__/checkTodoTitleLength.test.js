import checkTodoTitleLength from '../checkTodoTitleLength'; // this is your middleware
import { ADD_TODO_SUCCESS, ADD_TODO_ERROR } from '../../constants/actionTypes';
import { TODO_TITLE_EMPTY_ERROR_MESSAGE, TODO_TITLE_LENGTH_ERROR_MESSAGE } from '../../constants/messages';
// middleware needs those as parameters, usually calling next(action) at the end to proceed
const next = jest.fn();
const store = jest.fn();

describe('test checkTodoTitleLength', () => {
  it('should return Empty title Error', () => {
    store.dispatch = jest.fn();
    const action = { type: ADD_TODO_SUCCESS, payload: { title: '' } };
    checkTodoTitleLength(store)(next)(action);
    expect(store.dispatch.mock.calls[0][0].type).toEqual(ADD_TODO_ERROR);
    expect(store.dispatch.mock.calls[0][0].payload.title).toEqual(TODO_TITLE_EMPTY_ERROR_MESSAGE);
  });

  it('should return Lengthy title Error', () => {
    store.dispatch = jest.fn();
    const title = new Array(500 + 2).join('a');
    const action = { type: ADD_TODO_SUCCESS, payload: { title } };
    checkTodoTitleLength(store)(next)(action);
    expect(store.dispatch.mock.calls[0][0].type).toEqual(ADD_TODO_ERROR);
    expect(store.dispatch.mock.calls[0][0].payload.title).toEqual(TODO_TITLE_LENGTH_ERROR_MESSAGE);
  });

  it('should call the action if size is less than 500', () => {
    store.dispatch = jest.fn();
    const title = new Array(450).join('a');
    const action = { type: ADD_TODO_SUCCESS, payload: { title } };
    checkTodoTitleLength(store)(next)(action);
    expect(next.mock.calls[0][0].type).toEqual(ADD_TODO_SUCCESS);
  });
});
