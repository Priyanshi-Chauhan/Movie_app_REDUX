import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addmovies, setshowfavorites } from '../actions';
import {storecontext} from '../index';
//function App(props) {
class App extends React.Component{

  componentDidMount(){
  const {store} = this.props;
  store.subscribe(()=>{
    console.log('updated');   //cntrl2
    this.forceUpdate();
  })
  //make an api call
  //when we get the movies after api call , we dispatch an action saying that add these movies to the store
  // store.dispatch({        // cntrl1
  //   type:'ADD_MOVIES' , 
  //   movies : data  // for now , taking data from file , because we have not made any api call as of now
  // })
  store.dispatch(addmovies(data));
  console.log('STATE', store.getState());   //cntrl3
}

isMovieFavorite = (movie) => {
// const {favorites} = this.props.store.getState();
const {movies}  = this.props.store.getState();

// const index = favorites.indexOf(movie);
const index = movies.favorites.indexOf(movie);
if(index !== -1){
  // we found the movie
  return true;
}
return false;
}


onChangeTab = (val) =>{
  this.props.store.dispatch(setshowfavorites(val))
}

render(){
 
//const movies =props.store.getState();
  
 // const movies = this.props.store.getState();  // state is simply an array []
// const  {list} =  this.props.store.getState();   // {list: [] , favorites : []}                                              // state is an object with list and favorites as arrays  {list: [] , favorites : []}
// const {list, favorites, showfavorites} = this.props.store.getState();
const {movies , search} = this.props.store.getState();   // {movies: {} , search : {} }
const {list, favorites, showfavorites} = movies;
  console.log('render', this.props.store.getState());

const displaymovies = showfavorites ? favorites : list

return (
    <div className="App">
      <Navbar 
       dispatch = {this.props.store.dispatch}
       search = {search}
      // searchText ={this.props.store.dispatch}
      />
      <div className ="main">
        <div className="tabs">
          {/* <div className="tab" onClick={this.onChangeTab}>Movies</div> */}
          {/* <div className ="tab" onClick ={() =>this.onChangeTab(false)} >Movies</div> */}
        <div className = {`tab ${showfavorites ? '' :'active-tabs'}`} onClick = {()=>this.onChangeTab(false)}>Movies </div>
          <div className={`tab ${showfavorites ? 'active-tabs' : ''}`} onClick = {()=> this.onChangeTab(true)}>Favorites</div>

              </div>
               <div className= "list">
                 {/* {movies.map((movie, index) => { */}
{/* (switching tabs logic) instead of mapping over the list, i can map over the displaymovies  */}
                 {/* {list.map((movie, index) => { */}
                 {displaymovies.map((movie, index) => { 
                  return (
                 <MovieCard
                 movie ={movie} 
                 key = {`movies-${index}`}
                 dispatch = {this.props.store.dispatch}
                isFavorite ={this.isMovieFavorite(movie)}
                /> )})}
        </div>
        {displaymovies.length === 0 ? <div className="no-movies">No movies to display !!</div> :null}
      </div>
    </div>
  );
}}


class AppWrapper extends React.Component {
   render () {
     return (
      <storecontext.Consumer>
        {(store) => <App store ={store} />}
      </storecontext.Consumer>
     )
   }
}
export default AppWrapper;
