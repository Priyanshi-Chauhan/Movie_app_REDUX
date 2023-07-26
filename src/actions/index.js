// {
// type : 'ADD_MOVIES';

// }

// {
// type : 'DECREASE_COUNT';
// }


// these variables are called as action type

export const ADD_MOVIES ='ADD_MOVIES';
export const ADD_TO_FAVORITES  ='ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_SHOW_FAVORITES = 'SET_SHOW_FAVORITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';

//these functions are called action creators
export function addmovies(movies){
    return {
        type : ADD_MOVIES, 
 //       movies : movies   // later "movies" is the argument that is passed
   //shorthand property
   movies   
}
}

export function addtofavorites(movie) {
     return {
     type : ADD_TO_FAVORITES, 
     movie : movie
     }
}

export function removefromfavorites(movie){
return {
    type: REMOVE_FROM_FAVORITES, 
    //movie :movie
    movie
}
}

export function setshowfavorites(val) {
    return {
         type : SET_SHOW_FAVORITES, 
         val 
    }
}


export function addmoviestolist(movie){
     return {
         type :ADD_MOVIES_TO_LIST,
         movie
     }
}


export function handlemoviesearch(movie){
const url = `https://www.omdbapi.com/?i=tt3896198&apikey=ab4cc90&t=${movie}`;
 // this would break our app, because our action creators are generally synchronous and they return a particular object 
 // here my fetch request is an asynchronous cALL
return function(dispatch){
fetch(url)
.then(response => response.json())
.then(movie => {
    console.log('movie', movie);
    dispatch(addmoviesearchresult(movie));
})
}
}

export function addmoviesearchresult(movie) {
return {
     type : ADD_SEARCH_RESULT,
      movie
}
}