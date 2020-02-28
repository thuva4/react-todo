import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStatesToProps = (state) => ({
  isLoading: state.loader,
});
/**
 * Overlay Loader Component to Show the progress
 */
const ConnectedLoader = (props) => {
  const { isLoading } = props;

  return (
    <div>
      {isLoading && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="loader" />
          </div>
        </div>
      )}
    </div>
  );
};

ConnectedLoader.propTypes = {
  isLoading: PropTypes.bool,
};

ConnectedLoader.defaultProps = {
  isLoading: false,
};

const Loader = connect(mapStatesToProps)(ConnectedLoader);

export default Loader;
