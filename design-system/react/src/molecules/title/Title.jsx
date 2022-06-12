import React from 'react';
import PropTypes from 'prop-types';
import "../../fonts/stylesheet.css"
import "./title.css";
/**
 * Primary UI component for user interaction
 */
export const Title = ({children, width_size}) => {

  return (
    <h1 style={{width:width_size}}>
        {children}
    </h1>
  );

};

Title.propTypes = {
  width_size: PropTypes.string,
}