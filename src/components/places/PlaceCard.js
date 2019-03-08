import React from 'react';


import {Card,CardText,CardMedia,CardTitle,CardActions} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';



import './style.css';



export default class PlaceCard extends React.Component{



	render(){
		return(
			<div className="col-xs-12 col-sm-4 elevate" key={this.props.index}>
      			<Card>
        			<CardMedia>
          				<img src={process.env.PUBLIC_URL + this.props.place.imageUrl} alt="imtyage"/>
        			</CardMedia>
        			<CardTitle title={this.props.place.title}></CardTitle>
       				<CardText>{this.props.place.description}</CardText>
       				<CardActions style={{'textAlign':'right'}}>
       					<FlatButton secondary={true} label={"Ver más"}/>
       					<FlatButton secondary={true} label={"Ocultar"} onClick={()=>
       						this.props.onRemove(this.props.place)}/>
       				</CardActions>
      			</Card>
      		</div>
		);
	}
}
