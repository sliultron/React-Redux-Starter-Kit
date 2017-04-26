import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';



const Numbers = (props)=>{
    const numberClassName = (number)=>{
        if(props.selectedNumbers.indexOf(number) >=0)
          return "selected";
        else if(props.usedNumbers.indexOf(number) >=0)
          return "used";
        else
          return "";

    };


    return (
       <div className="panel">
            <div className="text-center">
              {Numbers.list.map((number, i)=>
                 <span className={"number text-center "+ numberClassName(number)} key={i} onClick={()=>props.selectNumber(number)}>{number}</span>
              )}
            </div>
        </div>
    );
};



Numbers.list =  _.range(1,10);

export default Numbers;