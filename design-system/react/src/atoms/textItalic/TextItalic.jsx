import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const TextItalic = ({ text }) => {

  return (
    <i>
        {text}
    </i>
  );
};

TextItalic.propTypes = {
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,

};

TextItalic.defaultProps = {
    text: "empty text",
};
