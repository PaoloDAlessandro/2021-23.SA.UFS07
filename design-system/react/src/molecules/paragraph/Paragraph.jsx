import React from 'react';
import PropTypes from 'prop-types';
/**
 * Primary UI component for user interaction
 */
export const Paragraph = ({children}) => {

  return (
    <p>
        {children}
    </p>
  );

};

Paragraph.PropTypes = {
}