import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state ={
			productlines :[]
		}
		
	}
	componentDidMount() {
		// go get all productlines from the database
		$.getJSON(window.hostAddress+'/productlines/get',(productlinesData)=>{
			console.log(productlinesData);
			this.setState({
				productlines : productlinesData
			})
		})
	}
	render (){
		const plImages = [];
		//loop through the productlines in the DB.
		this.state.productlines.map((row,index)=>{
			plImages.push(
				<div key={index} className = "col-sm-4 col-md-3 pl-images">
					<Link to ={`/shop/${row.link}`}><img src={row.image} /></Link>
					<div className="text">{row.productLine}</div>
				</div>
			)
		})
		return(
			<div >
				{plImages}	
		</div>
		);
	};
};		

export default Home;