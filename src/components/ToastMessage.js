import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

/**
 * Shows the error message
 */
const ToastMessage = ({ removeToastAfterTimeout = () => {}, toast = {} }) => {
  
  //Remove the toast message after 3 seconds
  useEffect(() => {
    setTimeout(() => removeToastAfterTimeout({ id: toast.get('id') }), 3000);
  }, [removeToastAfterTimeout, toast]);
  return (
    <div id="snackbar" className="show container">
      {toast.get('title')}
    </div>
  );
};

ToastMessage.propTypes = {
  removeToastAfterTimeout: PropTypes.func,
  toast: PropTypes.instanceOf(Map),
};

ToastMessage.defaultProps = {
  removeToastAfterTimeout: () => {},
  toast: Map({}),
};

export default ToastMessage;
