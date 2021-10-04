import * as React from 'react';
import * as PropTypes from 'prop-types';

import './Game.css';
import Card from './Card';
import Animal from './Animal';

// USING extends React.Component allows to save and maintain a components state

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    // refers to data representing the state of the class component
    this.state = {
      playersTurn: true,
      player: [new Animal('Elefant', 'placeholder.jpg', 3.3, 6000, 70, 1, 40)],
      computer: [new Animal('Nashorn', 'placeholder.png', 1, 2300, 50, 1, 50)],
      title: props.title,
    };
  }

  render() {
    const { playersTurn, player, computer, title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div className="info">{playersTurn ? 'Du bist' : 'Der Computer ist'} an der Reihe</div>
        <div className="cards">
          <Card animal={player[0]} uncovered={playersTurn} />
          <Card animal={computer[0]} uncovered={!playersTurn} />
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
  title: 'NFT-Card-Guessing-Game',
};

Game.propTypes = {
  title: PropTypes.string,
};
