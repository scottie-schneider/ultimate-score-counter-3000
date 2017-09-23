import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

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

function Player(props){
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <div className="counter">
          <button className="counter-action decrement">-</button>
          <div className="counter-score">{props.score}</div>
          <button className="counter-action increment">+</button>
        </div>
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
          <Player name="Sean mcSucksaLot" score={31}/>
          <Player name="Scottie Schneider" score={99}/>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
};

Application.defaultProps = {
  title: "Ultimate Score Counter 3000",
}


export default Application;
