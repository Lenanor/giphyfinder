import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,

  NavLink
} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Favourites from './components/Favourites';
import About from './components/About';

import './App.css';





class App extends Component {

  	constructor (){
    	super();
    	this.state = {
      		gifs: [],
      		loading: true
    	};
  	}

  	render() {

    return (
    	<div className="App">

    		<BrowserRouter>
    		  <div>
		
    		    <nav className="link-container">
    		      <NavLink className="link" exact to="/"> Home </NavLink>
    		      <NavLink className="link" to="/about"> About </NavLink>
    		      <NavLink className="link" to="/favourites"> Favourites </NavLink>
    		    </nav>

    		    <Header />
    		    
    		    <Route exact path="/" component={Home} />
    		    <Route path="/about" component={About} />
    		    <Route path="/favourites" component={Favourites} />
    		  </div>
    		</BrowserRouter>
      

      	</div>
    );
  }
}

export default App;
