import React from 'react';

import {Card,CardText} from 'material-ui/Card';
import {indigo500,amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component{
	render(){
		return(
			<ul>
				  <Card className="Header-Benefit">
				    <CardText >
				      <div className="row">
				        <div className="Header-Benefit-Image" style={{'backgroundColor':indigo500}}>
				          <img src={process.env.PUBLIC_URL + 'images/top-bg.png'} alt="imagek" />
				        </div>
				        <div className="Header-Benefit-Content">
				          <h3>Calificanos </h3>
				          <p>Califica tus lugares con experiencias </p>
				        </div>
				      </div>
				    </CardText>
				  </Card>
				  <Card className="Header-Benefit">
				    <CardText >
				      <div className="row">
				        <div className="Header-Benefit-Image" style={{'backgroundColor':indigo500}}>
				          <img src={process.env.PUBLIC_URL + 'images/heart.png'} alt="imge" />
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
				          <img src={process.env.PUBLIC_URL + 'images/no-internet.png'} alt="imge"/>
				        </div>
				        <div className="Header-Benefit-Content">
				          <h3>Sin Internet?</h3>
				          <p>Places funciona sin Internet</p>
				        </div>
				      </div>
				    </CardText>
				  </Card>
				</ul>
		);
	}
}
