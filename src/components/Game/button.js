import React from 'react';
import PropTypes from 'prop-types';



const Button = (props) => {
    const buttonClassName = ()=>{

        if(props.selectedNumbers.length > 0){
          return props.isAnswerCorrect? "btn btn-success" : 'btn btn-danger';
        }

        return 'btn btn-default';
    };

    let button;
    switch(props.isAnswerCorrect)
    {
      case true:
        button = <button className ="btn btn-success" onClick={props.commitAnswer}></button>
        break;
      case false:
        button = <button className ="btn btn-danger" disabled></button>
        break;
      default:
        button = <button className ="btn btn-default" disabled></button>
        break;
    }


    return (
       <div className="col-sm-2">
        {button}

      </div>
    );
};


Button.propTypes ={
    selectedNumbers: PropTypes.array,
    isAnswerCorrect: PropTypes.bool
};

export default Button;