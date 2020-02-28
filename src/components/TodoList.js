import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { completeTodoRequested, removeTodoRequested, removeAllTodoRequested } from '../actions/index';
import { getVisibleTodoList, getTodoListCounts } from '../selectors';


const mapStateToProps = (state) => ({
  todoList: getVisibleTodoList(state),
  todoListCounts: getTodoListCounts(state),
});

const mapDispatchToProps = (dispatch) => ({
  completeTodoById: (id) => dispatch(completeTodoRequested({ id })),
  removeTodoById: (id) => dispatch(removeTodoRequested({ id })),
  removeAllTodos: () => dispatch(removeAllTodoRequested()),
});

/**
 * Contains the todo list
 */
const ConnectedTodoList = ({
  todoList,
  completeTodoById,
  removeTodoById,
  removeAllTodos,
  todoListCounts,
}) => (
  <>
    <div className="container">
      <button type="button" onClick={() => removeAllTodos()} disabled={!todoListCounts.get('all')}> Delete All </button>
    </div>
    <div>
      <ul>
        {todoList.map((el, index) => {
          // Get the next possible State
          const todoNextStatus = el.get('isCompleted')
            ? 'Not Completed'
            : 'Completed';
          // Get current state
          const todoStatus = el.get('isCompleted') ? 'Completed' : 'Pending';
          return (
            <li key={el.get('id')}>
              <div className="todo-row">
                <label htmlFor="totoTitle" className={todoStatus.toLocaleLowerCase()}>
                  <h2>
                    {index + 1}
.
                    {el.get('title')}
                  </h2>
                  <span>{todoStatus}</span>
                </label>
                <button type="button" onClick={() => completeTodoById(el.get('id'))}>
                  {' '}
                  {todoNextStatus}
                  {' '}
                </button>
                <button type="button" onClick={() => removeTodoById(el.get('id'))}>
                  {' '}
                  Remove
                  {' '}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </>
);

ConnectedTodoList.propTypes = {
  todoList: PropTypes.instanceOf(List),
  completeTodoById: PropTypes.func,
  removeTodoById: PropTypes.func,
  removeAllTodos: PropTypes.func,
  todoListCounts: PropTypes.instanceOf(Map),
};

ConnectedTodoList.defaultProps = {
  todoList: List(),
  completeTodoById: () => {},
  removeTodoById: () => {},
  removeAllTodos: () => {},
  todoListCounts: Map(),
};

const TodoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedTodoList);

export default TodoList;
