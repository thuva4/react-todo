import { expectSaga } from 'redux-saga-test-plan';
import { fromJS } from 'immutable';
import {
  addTodoAsync,
} from '../../sagas/index';
import reducer from '../../reducers/todo';

describe('test addTodoAsync', () => {
  it('handles reducers and store state', () => {
    const todo = { title: 'Hello World!', id: '12345' };
    const expected = fromJS([
      {
        ...todo,
        isCompleted: false,
      },
    ]);
    return expectSaga(addTodoAsync, { payload: todo })
      .withReducer(reducer)
      .run(1500)
      .then((result) => {
        expect(result.storeState).toEqual(expected);
      });
  });
});
