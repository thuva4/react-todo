import {
  addTodoAsync,
  completeTodo,
  deleteAllTodo,
  deleteTodo,
  filterTodo,
} from '../index';
import { ADD_TODO_SUCCESS, SET_IS_LOADING } from '../../constants/actionTypes';

describe('test addTodoAsync', () => {
  it('Fire the add ToDo success action', () => {
    const generator = addTodoAsync({ payload: { title: 'Hello World!', id: '12345' } });

    let result = generator.next();
    
    expect(result.value.payload.action.type).toEqual(SET_IS_LOADING);
    expect(result.value.payload.action.payload).toEqual(true);
    generator.next();

    result = generator.next();

    expect(result.value.payload.action.type).toEqual(ADD_TODO_SUCCESS);
    expect(result.value.payload.action.payload).toEqual({ title: 'Hello World!', id: '12345' });

    result = generator.next();
    expect(result.value.payload.action.type).toEqual(SET_IS_LOADING);
    expect(result.value.payload.action.payload).toEqual(false);

    expect(generator.next().done).toEqual(true);
  });
});
