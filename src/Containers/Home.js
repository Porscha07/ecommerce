import React, {Component} from 'react';

class Home extends Component{
	render (){
		return(
			<div id="parent">
				<div className="container frame-one">
					<h1>Home</h1>// on ecommerce-app site have the three squares above the scrolling pictures of the products.
						<div className="square-one">Square One<img className="ferrari" src="./images/ferrari.jpg" /></div> //oils
						<div className="square-two">Square Two<img className="lamb" src='./images/lamb.jpg' /></div>//butters
						<div className="square-three">Square Three<img className="chevy-deluxe-coupe" src='./images/chevy-deluxe-coupe.jpg' /></div>//scrubs
				</div>
		</div>
		);
	};
};		

export default Home;