import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardText} from 'material-ui/Card';

import {red700,blue500,indigo500,amberA400} from 'material-ui/styles/colors';

import Title from './components/Title'

import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    numero:0
  };
  this.updateNumero = this.updateNumero.bind(this);
}

updateNumero(){
  this.setState({
    numero : this.state.numero + 1
  });
}

 render() {
    return (
     <MuiThemeProvider >
      <div className="Header-background">
      <div style={{"width":"80%","margin":"0 auto"}}>
        <div className="Header-main">
          <Title></Title>
          <RaisedButton onClick={this.updateNumero} label="Crear cuenta" secondary={true}/>
          <h2>{this.state.numero}</h2>
          <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/top-bg.png'} />
        </div>
      </div>
      </div>
      <div style={{'background-color':blue500,'padding':'50px'}}>
        <ul>
        <Card className="Header-Benefit">
          <CardText >
            <div className="row">
              <div className="Header-Benefit-Image" style={{'backgroundColor':red700}}>
                <img src={process.env.PUBLIC_URL + 'images/heart.png'} />
              </div>
              <div className="Header-Benefit-Content">
                <h3>Calificanos con emociones</h3>
                <p>Califica tus lugares con experiencias,no con numeros</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText >
            <div className="row">
              <div className="Header-Benefit-Image" style={{'backgroundColor':indigo500}}>
                <img src={process.env.PUBLIC_URL + 'images/heart.png'} />
              </div>
              <div className="Header-Benefit-Content">
                <h3>Tus lugares favoritos</h3>
                <p>Guarda tus lugares favoritos</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText >
            <div className="row">
              <div className="Header-Benefit-Image" style={{'backgroundColor':amberA400}}>
                <img src={process.env.PUBLIC_URL + 'images/no-internet.png'} />
              </div>
              <div className="Header-Benefit-Content">
                <h3>Sin Internet?</h3>
                <p>Places funciona sin Internet</p>
              </div>
            </div>
          </CardText>
        </Card>
        </ul>
      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
