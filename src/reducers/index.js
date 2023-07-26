import {combineReducers} from 'redux';

// basically we were doing string comparsion initially
import { ADD_MOVIES, ADD_TO_FAVORITES , REMOVE_FROM_FAVORITES, SET_SHOW_FAVORITES, ADD_SEARCH_RESULT, ADD_MOVIES_TO_LIST} from "../actions";

const initialMoviesState  = {
    list : [],
    favorites : [] ,
    showfavorites :false
}

// export default function movies(state = initialMoviesState , action){
export function movies(state =initialMoviesState , action){   
console.log('MOVIES_REDUCER');
    // we can use multiple if-else conditions here, but better to use switch
//     if(action.type == ADD_MOVIES){
//       //  return action.movies;   // we cant return this now, because state is now an object 
// return  {
//      ... state, 
//      list : action.movies
// }
// }
//     return state;   // if action does not have any type, or it does not matches any type 
switch(action.type){
   case ADD_MOVIES :
    return {
         ...state, 
         list: action.movies       // movies is coming from the action creator we made in actions folder 
    }
    case ADD_TO_FAVORITES :
        return {
            ...state , 
            favorites : [action.movie ,  ...state.favorites]      // movie is coming from the action creator "addfavorite" 
            // adding the movie at the very first index , spreading the rest of the movies in the favorites array (our favorites array could have lots of  movie already, so those will come over here )
        }
    case REMOVE_FROM_FAVORITES:
            const filteredArray = state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state, 
                favorites : filteredArray
            } 
    case SET_SHOW_FAVORITES :
         return {
             ...state, 
             showfavorites : action.val
         }
    case ADD_MOVIES_TO_LIST:    // whenever we are dispatching an action , each and every reducer will be called so copying this to search reducer as well
        return {
            ...state, 
            list : [action.movie, ...state.list]
        }
    default :
    return state;
}
} 

//ideally we should avoid string comparison

 // search reducer

 //export  function search(state ={result : {}}, action)
 const initialSearchState ={
    result : [],
    showSearchResults: false
 }
 export function search(state = initialSearchState , action){
     switch(action.type){
        case ADD_SEARCH_RESULT : 
        return {
            ...state, 
            result : action.movie,
            showSearchResults: true  // after getting the movie
        }

        case ADD_MOVIES_TO_LIST : 
        return {
            ...state , 
            showSearchResults : false
        } 

        default :
        return state;
       
     }
     console.log('SEARCH REDUCER');
    // return state;
 }


 // root reducer
 const initialRootState = {
     movies : initialMoviesState, 
     search :  initialSearchState
 }
//  export default function rootreducer(state = initialRootState, action){
//  // root reducer will be called everytime, i dispatch an action
//     return {
//          movies : movies(state.movies, action),     ==> second movies is the reducer name, third movies is the "movies" in the initialRootState 
//          search : search(state.search, action)

//      }
//  }

// we dont need to create the above method over here
//that is already created for us by redux  -> combineReducers

 export default combineReducers({
    // this method calls our movies and search reducers just like above only
 movies :  movies,  // later one are the reducers
 search : search
  // can use shorthand property
 })