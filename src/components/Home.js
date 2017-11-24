import React, { Component } from 'react';
import GifList from './GifList';
import SearchField from './SearchField';
import Loader from './Loader';


class Home extends Component {

  	constructor (){
    	super();
    	this.state = {
      		gifs: [],
      		loading: true
    	};
  	}

  	componentDidMount(){
  		this.handleSearch();
    }

    handleSearch = (query ="fred+astaire", limit = 25, ifRecent = "relevant") => {

		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&sort=${ifRecent}&api_key=dc6zaTOxFJmzC`) 
  		// response object / returns a promise

  		.then(response => response.json()) 
  		// callback that use the promise of fetch. When promise fulfilled: returns result in json format
  		.then(responseData => {
  		// updates state
  			this.setState({
  				gifs: responseData.data,
  				loading: false
  			});
  		})
  		.catch(error => {
  			console.log('Error fetching and parsing the data', error)
  		});   	 	
    }


  	render() {

		// console.log(this.state.gifs)

    return (
    	<div>
         	<SearchField onSearch={this.handleSearch}/>
          {
          	(this.state.loading) ? <Loader /> :  <GifList data={this.state.gifs} />
         	}
      </div>
    );
  }
}

export default Home;
