import React from 'react';
import _ from 'lodash';

const Stars = (props)=>{
    return (
       <div className="col-sm-5">
          {_.range(props.numberOfStars)
            .map(i=><span key={i} className="glyphicon glyphicon-star" aria-hidden="true"></span>)}
      </div>
    );
};


const Button = (props) => {
    const buttonClassName = ()=>{

        if(props.selectedNumbers.length > 0){
          return props.isAnswerCorrect? "btn btn-success" : 'btn btn-danger';
        }

        return 'btn btn-default';
    }

    let button;
    switch(props.isAnswerCorrect)
    {
      case true:
                button =
           <button className ="btn btn-success" onClick={props.commitAnswer}></button>;
        break;
      case false:
                button =
           <button className ="btn btn-danger" disabled></button>;
        break;
      default:
        button =
           <button className ="btn btn-default" disabled></button>;
        break;
    }


    return (
       <div className="col-sm-2">
        {button}

      </div>
    )
};


const Answer = (props)=>{

    return (
        <div className="col-sm-5">
            {props.selectedNumbers.map((number,i)=>
         <span className="number text-center " key={i} onClick={()=>props.unselectNumber(number)}>{number}</span>
        )}
        </div>
    )
}

const Numbers = (props)=>{
    const numberClassName = (number)=>{
        if(props.selectedNumbers.indexOf(number) >=0)
          return "selected";
        else if(props.usedNumbers.indexOf(number) >=0)
          return "used";
        else
          return "";

    }


    return (
       <div className="panel">
            <div className="text-center">
              {Numbers.list.map((number, i)=>
                 <span className={"number text-center "+ numberClassName(number)} key={i} onClick={()=>props.selectNumber(number)}>{number}</span>
              )}
            </div>
        </div>
    );
}

Numbers.list =  _.range(1,10);

class Game extends React.Component {
    static generateRandomNumber = ()=>1 + Math.floor(Math.random() * 9);
    state = {
        selectedNumbers: [],
        randomNumberOfStars: Game.generateRandomNumber(),
        usedNumbers: [],
        isAnswerCorrect: null,
        gameStatus: 'Start'
    };

    handleNumberClick = (clickedNumber)=>{
         if(this.state.selectedNumbers.indexOf(clickedNumber) >=0 ||
           this.state.usedNumbers.indexOf(clickedNumber) >=0
           ) return;

         this.setState(prevState=>({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)

         }), this.checkAnswer);




    };

    unselectNumber = (clickedNumber)=>{
           this.setState(prevState=>({
            selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
         }));
    };

    commitAnswer = () => {
      this.setState(prevState=>({
           selectedNumbers : [],
           usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
           isAnswerCorrect:null,
           randomNumberOfStars: Game.generateRandomNumber()
      }), this.determinGameResult);



    };

   checkAnswer = ()=> {
       this.setState(prevState =>({
           isAnswerCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n)=> acc+n, 0)
       }));
   };


    refreshStars = () => {
         this.setState(prevState=>({
           selectedNumbers : [],
           isAnswerCorrect:null,
           randomNumberOfStars: Game.generateRandomNumber()
      }));
    };


    determinGameResult = () => {
         if(this.state.usedNumbers.length === 9)
         {
              this.setState(prevState=>({
                  gameStatus : 'Winning'
              }));
         }
    };

    resetGame = () => {

         this.setState(prevState=>({
                selectedNumbers: [],
                randomNumberOfStars: Game.generateRandomNumber(),
                usedNumbers: [],
                isAnswerCorrect: null,
                gameStatus: 'Start'
             }));
    };


    render(){
       const {selectedNumbers, randomNumberOfStars, usedNumbers, isAnswerCorrect} =  this.state;

       return(
           <div className="container">
             <h2> Play Nine</h2>
                <br />
            <div className ="row">
               <Stars numberOfStars={randomNumberOfStars}/>
               <Button selectedNumbers={selectedNumbers}
                        isAnswerCorrect={isAnswerCorrect}
                        commitAnswer={this.commitAnswer}
                        refreshStars={this.refreshStars} />
               <Answer selectedNumbers={selectedNumbers}
                       unselectNumber={this.unselectNumber}/>
             </div>
             <br />
               <Numbers selectedNumbers={selectedNumbers}
                         usedNumbers={usedNumbers}
                          selectNumber={this.handleNumberClick}/>
            <div className="row">
              <div className="col-12 text-center">
                 <h1>{this.state.gameStatus}</h1>

                <button onClick={this.resetGame} className="btn btn-primary">Play Again</button>
  <br />
                <button className="btn btn-warning" onClick={this.refreshStars}>
                  <span className="glyphicon glyphicon-refresh"> </span>
                </button>
              </div>
           </div>
           </div>

       )
     }
}



class PlayNineGame extends React.Component {

     render(){
       return(
          <div>
            <Game />
         </div>
       )
     }
}

export default PlayNineGame;
