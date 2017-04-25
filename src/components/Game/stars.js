import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


const Stars = (props)=>{
    return (
       <div className="col-sm-5">
          {_.range(props.numberOfStars)
            .map(i=><span key={i} className="glyphicon glyphicon-star" aria-hidden="true"></span>)
          }
      </div>
    );
};


Stars.propTypes ={
    numberOfStars: PropTypes.number.isRequired
}


export default Stars;
