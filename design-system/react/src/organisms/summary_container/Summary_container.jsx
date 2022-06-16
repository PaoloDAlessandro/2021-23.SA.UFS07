import React from 'react';
import PropTypes from 'prop-types';
import "./summary_container.css"
/**
 * Primary UI component for user interaction
 */
export const Summary_container = ({children}) => {

  return (
    <div className='summary_container'>
        {children}
    </div>
  );
};

Summary_container.propTypes = {

}