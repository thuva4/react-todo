import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoRequested } from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoRequested(todo)),
});

/**
 * Todo Creator component
 */
const ConnectedTodoCreator = (props) => {
  const [todoTitle, setTodoTitle] = useState('');

  // Save the title input changes to internal states
  const onTitleInputChanged = (e) => {
    setTodoTitle(e.target.value);
  };

  // Call the action when Create button clicked
  const onCreateButtonClicked = () => {
    props.addTodo({
      title: todoTitle,
      id: Math.random(),
    });
    setTodoTitle('');
  };

  return (
    <div className="container">
      <input value={todoTitle} onChange={onTitleInputChanged} />
      <button type="button" onClick={onCreateButtonClicked}>Create</button>
    </div>
  );
};

ConnectedTodoCreator.propTypes = {
  addTodo: PropTypes.func,
};

ConnectedTodoCreator.defaultProps = {
  addTodo: () => {},
};

const TodoCreator = connect(null, mapDispatchToProps)(ConnectedTodoCreator);

export default TodoCreator;
