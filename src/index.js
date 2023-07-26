import React ,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';     // applyMiddleware because we have to tell redux that we have to add this middleware
import thunk from 'redux-thunk';
import './index.css';
import App from './Components/App';
// import movies from './reducers';
import combineReducers from './reducers';
 
// function logger(obj, next, action)
// below is the curried form of the logger function
//logger(obj)(next)(action)
// const logger = function({dispatch, getState}){
//   return function(next){
//      return function(action){
//        // m iddleware
//        console.log('ACTION_TYPE = ', action.type);
//        // next is referring to the next middleware in chain, or dispatch if it is the last middleware
//        next(action);      // if we wont call next,our app will be stuck 
//      }
//   } 
// }
 const logger = ({dispatch, getState}) =>(next) =>(action) =>{
  //logger code
  if(typeof action !== 'function'){ 
    console.log('ACTION_TYPE = ', action.type);
    } 
     next(action);
 }

//  const thunk = ({dispatch, getState}) =>(next) =>(action) => {
//   if(typeof action  == 'function'){
//     action(dispatch);
//  return ;    
//   }
//   next(action);
//  }

// const store= createStore(movies);
const store = createStore(combineReducers, applyMiddleware(logger, thunk));
console.log('store', store);

export const storecontext = createContext();
console.log('storecontext', storecontext);

// console.log('STATE before sending action', store.getState());           // when we inspected on the browser, we found that store has a method called getState

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'superman'}]
// })


// console.log('state after sending actions', store.getState());
 
// we can make our own provider
class Provider extends React.Component{
 
 render(){
  const {store} = this.props;
   return(
    <storecontext.Provider value = {store}>
          {this.props.children}
    </storecontext.Provider>
   )
 } 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

