import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props)=>{

    return (
        <div className="col-sm-5">
            {props.selectedNumbers.map((number,i)=>
         <span className="number text-center " key={i} onClick={()=>props.unselectNumber(number)}>{number}</span>
        )}
        </div>
    );
};



Answer.propTypes ={
    selectedNumbers: PropTypes.array
}

export default Answer;