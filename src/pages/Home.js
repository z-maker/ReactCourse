import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import {indigo500,blue500,orangeA700,amberA400} from 'material-ui/styles/colors';

import PlaceCard from '../components/places/PlaceCard'
import Benefits from '../components/Benefits'
import Title from '../components/Title';
import data from '../request/places';



export default class Home extends React.Component{

	constructor(props){
	  super(props);
	  this.state = {
	    numero:0,
	    places : data.places
	  }
	  this.updateNumero = this.updateNumero.bind(this);
	  this.hiddePlace = this.hiddePlace.bind(this);
	}

	places(){
  		return this.state.places.map((place,index)=>{
    		return(
     			<PlaceCard onRemove={this.hiddePlace} place={place} index={index}/>
    		);
  		})
	}

	hiddePlace(place){
		this.setState({
			places: this.state.places.filter(el => el != place),
		})
	}


	updateNumero(){
	  this.setState({
	    numero : this.state.numero + 1
	  });
	}

	render(){
		return(
			<section>
				<div className="Header-background">
					<div style={{"width":"80%","margin":"0 auto"}}>
				  		<div className="Header-main">
				    		<Title></Title>
				    		<RaisedButton onClick={this.updateNumero} label="Crear cuenta" secondary={true}/>
				    		<h2>{this.state.numero}</h2>
				    		<img className="Header-ilustration App-logo" src={process.env.PUBLIC_URL + '/images/top-bg.png'} />
				  		</div>
					</div>
				</div>
				<div style={{'padding':'30px'}}>
				<Benefits/>
				</div>
				<div style={{'backgroundColor':indigo500,'padding':'50px','color':'white'}}>
				  <h3 style={{'fontSize':'2em'}}>Lo más destacado...</h3>
				  <div className="row">
				    {this.places()}
				  </div>
				</div>
			</section>
		);
	}


}
