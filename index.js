import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Users from './src/Users';
import './style.css';

class App extends Component {
  render() {
    return (
      <Users />
    );
  }
}

render(<App />, document.getElementById('root'));
