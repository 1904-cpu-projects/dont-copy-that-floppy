import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

const productsReducer = (state = [], action)=>{
  switch(action.type){
    case SET_PRODUCTS:
      return action.products
  }

  return state;

}

const reducer = combineReducers({
  products: products
});

const _setProducts = (products)=>{
  return{
    type: SET_PRODUCTS,
    products
  }
}

const setProducts = ()=>{
  return async (dispatch)=>{
    const response = await axios.get('/api/products');
    dispatch(_setProducts(response.data));
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store
export  {setProducts}
