import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title'
import Iron from './components/iron/Iron'

class App extends Component {

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Title/>
        </header>
        <Iron/>
      </div>
    );
  }
}

export default App;

