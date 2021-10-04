import React, { Component } from 'react';

import './App.css';
import Card from './Card';
import Animal from './Animal';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const elephant = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);
    return (
      <div>
        <h1>Ndrslmpk Cardgame</h1>
        <Card animal={elephant} uncovered />
      </div>
    );
  }
}
