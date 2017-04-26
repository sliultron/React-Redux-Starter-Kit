import React from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';

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