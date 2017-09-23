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
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment">+</button>
      </div>
    )
  }
}

Counter.propTypes = {
  score: PropTypes.number,
}

function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
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
