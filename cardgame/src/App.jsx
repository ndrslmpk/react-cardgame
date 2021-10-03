import React, { Component } from 'react';

import './App.css';
import Card from './Card';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Ndrslmpk Cardgame</h1>
        <Card />
      </div>
    );
  }
}
