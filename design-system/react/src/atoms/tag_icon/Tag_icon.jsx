import React from 'react';
import PropTypes from 'prop-types';
import "./tag_icon.css"
/**
 * Primary UI component for user interaction
 */
export const Tag_icon = ({children}) => {

  return (
    <div className='tag_icon'>
        {children}
    </div>
  );

};

Tag_icon.propTypes = {

}