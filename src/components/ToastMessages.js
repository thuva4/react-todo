import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { removeToast } from '../actions/index';
import ToastMessage from './ToastMessage';

const mapStatesToProps = (state) => ({
  toasts: state.toasts,
});

const mapDispatchToProps = (dispatch) => ({
  removeToastAfterTimeout: (todo) => dispatch(removeToast(todo)),
});

/**
 * Contains the error messages(Container for ToastMessages )
 */
const ConnectedToastMessages = ({ removeToastAfterTimeout, toasts }) => (
  <>
    {toasts.map((toast) => (
      <ToastMessage
        key={toast.get('id')}
        toast={toast}
        removeToastAfterTimeout={removeToastAfterTimeout}
      />
    ))}
  </>
);

ConnectedToastMessages.propTypes = {
  removeToastAfterTimeout: PropTypes.func,
  toasts: PropTypes.instanceOf(List),
};

ConnectedToastMessages.defaultProps = {
  removeToastAfterTimeout: () => {},
  toasts: List(),
};


const ToastMessages = connect(
  mapStatesToProps,
  mapDispatchToProps,
)(ConnectedToastMessages);

export default ToastMessages;
