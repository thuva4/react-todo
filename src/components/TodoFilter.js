import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { filterTodoRequested } from '../actions/index';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING } from '../constants/utils';
import { getTodoListCounts } from '../selectors';

const mapDispatchToProps = (dispatch) => ({
  filterTodo: (filter) => dispatch(filterTodoRequested(filter)),
});

const mapStatesToProps = (state) => ({
  filter: state.filter,
  todoListCounts: getTodoListCounts(state),
});

/**
 * Todo filter component
 */
const ConnectedTodoFilter = (props) => {
  // calls the action when filter button clicked
  const onFilterButtonClicked = (e) => {
    const filterValue = e.target.id;
    props.filterTodo({ filter: filterValue });
  };

  // Disabled the active filter button
  // Disabled all the filter button if total todo count is zero
  const { filter, todoListCounts } = props;

  return (
    <div className="container">
      <button
        type="button"
        id={SHOW_ALL}
        disabled={filter === SHOW_ALL || !todoListCounts.get('all')}
        onClick={onFilterButtonClicked}
      >
        {SHOW_ALL}
      </button>
      <button
        type="button"
        id={SHOW_COMPLETED}
        disabled={filter === SHOW_COMPLETED || !todoListCounts.get('all')}
        onClick={onFilterButtonClicked}
      >
        {SHOW_COMPLETED}
      </button>
      <button
        type="button"
        id={SHOW_PENDING}
        disabled={filter === SHOW_PENDING || !todoListCounts.get('all')}
        onClick={onFilterButtonClicked}
      >
        {SHOW_PENDING}
      </button>
    </div>
  );
};

ConnectedTodoFilter.propTypes = {
  filterTodo: PropTypes.func,
  filter: PropTypes.string,
  todoListCounts: PropTypes.instanceOf(Map),
};

ConnectedTodoFilter.defaultProps = {
  filterTodo: () => {},
  filter: SHOW_ALL,
  todoListCounts: Map(),
};

const TodoFilter = connect(
  mapStatesToProps,
  mapDispatchToProps,
)(ConnectedTodoFilter);

export default TodoFilter;
