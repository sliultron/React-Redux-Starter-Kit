import React from 'react';
import PropTypes from 'prop-types';

const ComponentContainer = (props)=>{
   return (
      <div className={props.className}>
          <h3>{props.title}</h3>
          {props.children}
      </div>
   );
};

ComponentContainer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default ComponentContainer;
