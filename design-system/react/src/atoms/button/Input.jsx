import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label, onClick }) => {
  return (
    <input
      onClick={onClick}
      type="text"
    >
      {label}
    </input>
  );
};

Input.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

input.defaultProps = {
  onClick: undefined,
};
