import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

Title.propTypes = {
};

Title.defaultProps = {
};