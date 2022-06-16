import React from 'react';
import PropTypes from 'prop-types';
import "./summary_info.css"
/**
 * Primary UI component for user interaction
 */
export const Summary_info = ({children}) => {

  return (
    <div className='summary_info'>
        {children}
    </div>
  );
};

Summary_info.propTypes = {

}