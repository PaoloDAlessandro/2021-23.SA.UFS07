import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const TextBold = ({ text }) => {

  return (
    <b>
        {text}
    </b>
  );
};

TextBold.propTypes = {
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,

};

TextBold.defaultProps = {
    text: "empty text",
};
