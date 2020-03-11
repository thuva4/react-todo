import { fromJS } from 'immutable';
import {
  getVisibleTodoList,
} from '../index';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING } from '../../constants/utils';

describe('test getVisibleTodoList', () => {
  it('Return All todos', () => {
    const todoList = [
      {
        title: 'todo1',
        id: '1',
        isCompleted: true,
      },
      {
        title: 'todo2',
        id: '2',
        isCompleted: true,
      },
      {
        title: 'todo3',
        id: '3',
        isCompleted: false,
      },
    ];
    const actual = getVisibleTodoList.resultFunc(SHOW_ALL, todoList);
    const expected = todoList;
    expect(actual).toEqual(expected);
  });

  it('Return Completed todos', () => {
    const todoList = fromJS([
      {
        title: 'todo1',
        id: '1',
        isCompleted: true,
      },
      {
        title: 'todo2',
        id: '2',
        isCompleted: true,
      },
      {
        title: 'todo3',
        id: '3',
        isCompleted: false,
      },
    ]);

    const completedTodoList = fromJS([
      {
        title: 'todo1',
        id: '1',
        isCompleted: true,
      },
      {
        title: 'todo2',
        id: '2',
        isCompleted: true,
      },
    ]);
    const actual = getVisibleTodoList.resultFunc(SHOW_COMPLETED, todoList);
    const expected = completedTodoList;
    expect(actual).toEqual(expected);
  });


  it('Return Pending todos', () => {
    const todoList = fromJS([
      {
        title: 'todo1',
        id: '1',
        isCompleted: true,
      },
      {
        title: 'todo2',
        id: '2',
        isCompleted: true,
      },
      {
        title: 'todo3',
        id: '3',
        isCompleted: false,
      },
    ]);

    const pendingTodoList = fromJS([
      {
        title: 'todo3',
        id: '3',
        isCompleted: false,
      },
    ]);


    const actual = getVisibleTodoList.resultFunc(SHOW_PENDING, todoList);
    const expected = pendingTodoList;
    expect(actual).toEqual(expected);
  });
});
