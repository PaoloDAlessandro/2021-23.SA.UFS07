import React from 'react';
import PropTypes from 'prop-types';
import "./search_box.css"
/**
 * Primary UI component for user interaction
 */
export const Search_box = ({children}) => {

  return (
    <div className='search_box'>
        {children}
    </div>
  );

};

Search_box.propTypes = {
}