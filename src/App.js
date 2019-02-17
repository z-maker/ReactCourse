import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title'
import Iron from './components/iron/Iron'
import {TitleSub} from './components/Title'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    numero:0
  };


}

updateNumer(){
  this.setState({
    numero : this.state.numero + 1
  });
}

 render() {
    return (
     <section>
      <div>
      <div>
        <Title></Title>
        <button onClick={()=>{this.updateNumer()}}>Crear cuenta</button>
        <h2>{this.state.numero}</h2>
        <img src={process.env.PUBLIC_URL + '/images/top-bg.png'} width="200"/>
        <div>
          <ul>
            <li>
              <h3>Calificanos con emociones</h3>
              <p>Califica tus lugares con experiencias,no con numeros</p>
            </li>
            <li>
              <h3>Sin Internet?</h3>
              <p>Places funciona sin Internet</p>
            </li>
            <li>
              <h3>Tus lugares favoritos</h3>
              <p>Guarda tus lugares favoritos</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
     </section>
    );
  }
}

export default App;
