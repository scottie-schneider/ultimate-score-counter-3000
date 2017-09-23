import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

var PLAYERS = [
  {
    name: "Scottie Too Hottie",
    score: 47,
    key: 1,
  },
  {
    name: "Sean Gotta have doz macros",
    score: 2,
    key: 2,
  }
]

function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {score: 0};
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this); 
  }

  incrementScore(e){
    this.setState((prevState, props) => ({
      score: prevState.score + 1,
    }))
  }

  decrementScore(e){
    this.setState((prevState, props) => ({
      score: prevState.score - 1,
    }))
  }
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}


function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter />
      </div>
    </div>
  )
}


Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}

function Application(props) {
  return (
    <div>
      <div className="scoreboard">
        <Header title={props.title} />
        <div className="players">
          {props.players.map(function(player){
            return <Player name={player.name} score={player.score} key={player.key}/>
          })}
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
};

Application.defaultProps = {
  title: "Ultimate Score Counter 3000",
  players: PLAYERS,
}


export default Application;
