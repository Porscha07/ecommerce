import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Containers/NavBar';
import Home from './Containers/Home';
import Register from './Containers/Register';
import Login from './Containers/Login';
import Slick from './Components/Slick';



class App extends Component {
  render() {
    return (
         <Router>
         	<div className="App">
         		<NavBar />
              <Route exact path="/" component={Slick} />
		         	<div className="container main">
		         		<Route exact path="/" component={Home} />
		         		<Route exact path="/Register" component={Register} />
                <Route exact path="/Login" component={Login} />
		         	</div>
		    </div>
       </Router>
    );
  }
}

export default App;

