import React from 'react';
import {data} from '../data';
import {handlemoviesearch , addmoviestolist} from '../actions'
import { storecontext } from '../index';

class Navbar extends React.Component{

    constructor() {
         super();
         this.state = {
            // showSearchResults : true;
// showSearchResults: false ,   // initially  , moved to search reducer initialState
            searchText : ''
         }
    }
     
     handleAddToMovies = (movie) => {
               this.props.dispatch(addmoviestolist(movie));
               this.setState({
                showSearchResults :  false
               })
               }

    handleSearch = () => {
        const {searchText} = this.state;
        //we can call api here , but its not a good practice, since our component is basically a part of UI , and we should keep our UI logic separate from our data fetching logic 
        this.props.dispatch(handlemoviesearch(searchText)) // handlemoviecreator is an action creator
    }
    handleChange = (e) => {
        this.setState({
        searchText : e.target.value
        })
    }

    render() {
        // const {showSearchResults} = this.state;
        const  {result:movie, showSearchResults} =  this.props.search;    // these have come from search reducer as a props
    return(
 <div className = "nav">
<div className = "search-container">
<input onChange = {this.handleChange} />
<button id = "search-btn" onClick = {this.handleSearch}>Search</button>
{showSearchResults && 
<div className="search-results">
    <div className="search-result">
        {/* <img src={data[0].Poster} alt ="search-pic" /> */}
        <img src={movie.Poster} alt="search-pic" />
        <div className="movie-info">
            {/* <span>{data[0].Title}</span> */}
            <span>{movie.Title}</span>
            {/* <button onClick ={ () => this.handleAddToMovies(data[0])}>Add to Movies</button> */}
           <button onClick = { () => this.handleAddToMovies(movie)}>Add to Movies</button>
        </div>
</div>
</div>
}


</div>
 </div>
 )
}
}
class NavbarWrapper extends React.Component {
    render() {
        return(
    <storecontext.Consumer>
{(store) => <Navbar dispatch={store.dispatch} search ={this.props.search}/>}
    </storecontext.Consumer>
    )
}
}
export default NavbarWrapper;
