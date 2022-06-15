import React from 'react';
import PropTypes from 'prop-types';
import "./tag.css"
/**
 * Primary UI component for user interaction
 */
export const Tag = ({children, back_color}) => {

  return (
    <div className='tag' style={{backgroundColor:back_color}}>
        {children}
    </div>
  );
};

Tag.propTypes = {
    
}