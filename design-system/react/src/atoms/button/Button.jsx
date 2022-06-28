import React from 'react';
import PropTypes from 'prop-types';



/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, onClick, type }) => {
  return (
    <button
      tw="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,


  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type: "button",
};
