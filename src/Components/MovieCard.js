import React from 'react';
 import { addtofavorites , removefromfavorites } from '../actions';

class MovieCard extends React.Component{
      
    handleFavoriteClick = () =>{
        const {movie} = this.props;
        this.props.dispatch(addtofavorites(movie))
    }
       handleUnFavoriteClick =() =>{
        const {movie} = this.props; 
         this.props.dispatch(removefromfavorites(movie));

       }
    render() {
        const {movie, isFavorite} = this.props;
         return(

               <div className = "movie-card">
                <div className="left">
                <img alt="movie-poster" src = {movie.Poster} /> {/*Poster and Title are from data.js*/}
                </div>
                <div className="right">
                    <div className ="title">{movie.Title}</div>
                    <div className ="plot">{movie.Plot}</div>
                    <div className ="footer">
                    <div className= "rating">{movie.imdbRating}</div>
                    {
                        isFavorite 
                        ? <button className="unfavourite-btn" onClick ={this.handleUnFavoriteClick}>UnFavorite</button>
                        : <button className="favourite-btn" onClick ={this.handleFavoriteClick} >Favourite</button>
                    }
                    
                </div>
                </div>
            </div>
         )
    }
}

export default MovieCard;