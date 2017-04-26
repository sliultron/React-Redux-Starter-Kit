import React from 'react';
<<<<<<< HEAD

import PropTypes from 'prop-types';
import _ from 'lodash';
=======
import _ from 'lodash';
import PropTypes from 'prop-types';

>>>>>>> a0a26c20882731b1f94cb3833ea25c50e201a307

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

<<<<<<< HEAD
export default Stars;
=======

export default Stars;
>>>>>>> a0a26c20882731b1f94cb3833ea25c50e201a307
