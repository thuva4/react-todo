import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { getTodoListCounts } from '../selectors';

const mapStateToProps = (state) => ({
  todoListCounts: getTodoListCounts(state),
});

/**
 * Contains todo counts details(all, completed, pending)
 */
const ConnectedTodoListCount = ({ todoListCounts }) => (
  <div className="container">
    <label htmlFor="allCount" className="count-label">
      {' '}
        ALL TODO COUNT:
      {' '}
      {todoListCounts.get('all')}
    </label>
    <label htmlFor="completedCount" className="count-label">
      {' '}
        COMPLETED TODO COUNT:
      {' '}
      {todoListCounts.get('completed')}
    </label>
    <label htmlFor="pendingCount" className="count-label">
      {' '}
        PENDING TODO COUNT:
      {' '}
      {todoListCounts.get('pending')}
    </label>
  </div>
);

ConnectedTodoListCount.propTypes = {
  todoListCounts: PropTypes.instanceOf(Map),
};

ConnectedTodoListCount.defaultProps = {
  todoListCounts: Map({}),
};

const TodoListCount = connect(mapStateToProps)(ConnectedTodoListCount);

export default TodoListCount;
