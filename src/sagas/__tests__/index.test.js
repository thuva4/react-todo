import { runSaga } from 'redux-saga';
import { testSaga } from 'redux-saga-test-plan';
import {
  addTodoAsync,
  delay,
} from '../index';
import { ADD_TODO_SUCCESS, SET_IS_LOADING } from '../../constants/actionTypes';

describe('test addTodoAsync', () => {
  it('fire the add ToDo success action', () => {
    const generator = addTodoAsync({
      payload: { title: 'Hello World!', id: '12345' },
    });

    let result = generator.next();

    expect(result.value.payload.action.type).toEqual(SET_IS_LOADING);
    expect(result.value.payload.action.payload).toEqual(true);
    generator.next();

    result = generator.next();

    expect(result.value.payload.action.type).toEqual(ADD_TODO_SUCCESS);
    expect(result.value.payload.action.payload).toEqual({
      title: 'Hello World!',
      id: '12345',
    });

    result = generator.next();
    expect(result.value.payload.action.type).toEqual(SET_IS_LOADING);
    expect(result.value.payload.action.payload).toEqual(false);

    expect(generator.next().done).toEqual(true);
  });

  it('addTodoAsync: full test unit test', async () => {
    const dispatched = [];
    const todo = { title: 'Hello World!', id: '12345' };
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' }),
      },
      addTodoAsync,
      { payload: todo },
    ).toPromise();
    expect(dispatched).toEqual([
      { type: SET_IS_LOADING, payload: true },
      { type: ADD_TODO_SUCCESS, payload: todo },
      { type: SET_IS_LOADING, payload: false },
    ]);
  });

  // eslint-disable-next-line jest/expect-expect
  it('addTodoAsync: test-plan unit test', () => {
    const todo = { title: 'Hello World!', id: '12345' };
    testSaga(addTodoAsync, { payload: todo })
      .next()
      .put({ type: SET_IS_LOADING, payload: true })
      .next()
      .call(delay, 1000)
      .next()
      .put({ type: ADD_TODO_SUCCESS, payload: todo })
      .next()
      .put({ type: SET_IS_LOADING, payload: false })
      .next()
      .isDone();
  });
});
