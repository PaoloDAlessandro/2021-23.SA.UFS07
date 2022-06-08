import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ text }) => {

  return (
    <span>
        {text}
    </span>
  );
};

Text.propTypes = {
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,

};

Text.defaultProps = {
    text: "empty text",
};
