import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Stars from './stars';

import Button from './button';

import Answer from './answer';

import Numbers from './numbers';


class PlayNine extends React.Component {
    static generateRandomNumber = ()=>1 + Math.floor(Math.random() * 9);
    state = {
        selectedNumbers: [],
        randomNumberOfStars: PlayNine.generateRandomNumber(),
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
           randomNumberOfStars: PlayNine.generateRandomNumber()
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
           randomNumberOfStars: PlayNine.generateRandomNumber()
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
                randomNumberOfStars: PlayNine.generateRandomNumber(),
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

                <button onClick={this.resetGame} className="btn btn-primary">Play Again!</button>
  <br />
                <button className="btn btn-warning" onClick={this.refreshStars}>
                  <span className="glyphicon glyphicon-refresh" />
                </button>
              </div>
           </div>
           </div>

       );
     }
}

export default PlayNine;


