import React, { Component } from 'react';


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: ''};

    }
    render(){
        return( 

        <div className="search-bar row">
        <div className="col-sm-10">
        <input 
        className="form-control col-sm-7"
        onChange ={ event => 
            this.setState({ value: event.target.value })}
          
        
        
        placeholder="Search YouTube"/>
        </div>
        <div className="col-sm-2">
        <button 
        value ={this.state.value}
        onClick={event =>  this.onInputChange(event.target.value)} 
        className="btn btn-danger col-sm-5">
        <i className="fa fa-search">
        </i>
        
        </button>
        </div>
        </div>
        
        );
    }

   onInputChange(term){
      this.setState({term})
      this.props.onSearchTermChange(term);
      
   }
 
}

export default SearchBar;