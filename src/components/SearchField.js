import React, {Component} from 'react';
import "./SearchField.css"
	
export default class SearchField extends Component {

	state = {
	    searchText: 'fred+astaire',
	    searchLimit: 25,
	    searchRecent: 'relevant'
	}
   

  	onTextChange = e => {
  		this.setState({ searchText: e.target.value })	
  		console.log(this.state.searchText)
  	}

  	onNumberChange = e => {
 		this.setState({ searchLimit: e.target.value })	
 		console.log(this.state.searchLimit)
  	}

  	onRecentChange = e => { 
  		this.setState( {searchRecent: "recent"} )
  	}


  	handleSubmit = e => {
  		e.preventDefault();		  
  		this.props.onSearch(this.state.searchText, this.state.searchLimit, this.state.searchRecent);
  		e.currentTarget.reset();
  		this.setState({ searchLimit: 24 })
  		this.setState({ searchRecent: 'relevant' })
  	}

	render(){

		return(
		<form onSubmit={this.handleSubmit} className="form-style">
			<div>
				<label>I'm looking for:</label>
				<input className="input-style" type="search" onChange={this.onTextChange} name="search" placeholder="Type here..." />
			</div>
			<div>
				<label>Number of gifs:</label>
				<input className="input-style" type="search" onChange={this.onNumberChange} name="number" placeholder="Type here..." />
			</div>
			<div className="checkbox-container">
				<input className="checkbox" type="checkbox" onChange={this.onRecentChange} name="recent" value="true" />
				<label>Yes, only recent published gifs</label>
			</div>
				<button type="submit" name="search-button"> SEARCH </button>
			
		</form>
		);
	}
}