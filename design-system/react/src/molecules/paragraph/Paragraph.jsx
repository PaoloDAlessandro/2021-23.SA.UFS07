import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/text/Text';
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
