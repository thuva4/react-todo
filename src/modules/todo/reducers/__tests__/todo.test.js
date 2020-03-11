import { fromJS } from 'immutable';
import todoReducer from '../todo';
import {
  ADD_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_ALL_TODO_SUCCESS,
} from '../../constants/actionTypes';

describe('test todoReducers', () => {
  const mockInitialState = fromJS([]);

  it('should return default state', () => {
    const action = {
      type: 'unKnownAction',
    };

    expect(todoReducer(mockInitialState, action)).toEqual(mockInitialState);
  });

  it('should return todoList with new todo', () => {
    const todo = {
      title: 'Hello World',
      id: '1223',
    };

    const expected = fromJS([
      {
        ...todo,
        isCompleted: false,
      },
    ]);

    const action = {
      type: ADD_TODO_SUCCESS,
      payload: todo,
    };
    expect(todoReducer(mockInitialState, action)).toEqual(expected);
  });

  it('should return todoList with new todo isCompleted State', () => {
    const todo = {
      title: 'Hello World',
      id: '1223',
    };

    const initialState = fromJS([
      {
        ...todo,
        isCompleted: false,
      },
    ]);

    const expected = fromJS([
      {
        ...todo,
        isCompleted: true,
      },
    ]);

    const action = {
      type: COMPLETE_TODO_SUCCESS,
      payload: {
        id: todo.id,
      },
    };
    expect(todoReducer(initialState, action)).toEqual(expected);
  });

  it('should return todoList after removing todo list by id', () => {
    const todo1 = {
      title: 'Hello World',
      id: '1223',
      isCompleted: true,
    };

    const todo2 = {
      title: 'Hello World',
      id: '1224',
      isCompleted: false,
    };

    const initialState = fromJS([
      todo1, todo2,
    ]);

    const expected = fromJS([todo2]);

    const action = {
      type: DELETE_TODO_SUCCESS,
      payload: {
        id: todo1.id,
      },
    };
    expect(todoReducer(initialState, action)).toEqual(expected);
  });

  it('should return empty todoList(Remove everything)', () => {
    const todo1 = {
      title: 'Hello World',
      id: '1223',
      isCompleted: true,
    };

    const todo2 = {
      title: 'Hello World',
      id: '1224',
      isCompleted: false,
    };

    const initialState = fromJS([
      todo1, todo2,
    ]);

    const expected = fromJS([]);

    const action = {
      type: DELETE_ALL_TODO_SUCCESS,
    };
    expect(todoReducer(initialState, action)).toEqual(expected);
  });
});
