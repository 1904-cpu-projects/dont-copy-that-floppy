import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORIES = 'SET_CATEGORIES';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...state, action.products];
  }

  return state;
};

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
  }
  return state;
};

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

const _setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products
  };
};

const _setCategories = categories => {
  return {
    type: SET_CATEGORIES,
    categories
  };
};

const setProducts = () => {
  return async dispatch => {
    const response = await axios.get('/api/products');
    return dispatch(_setProducts(response.data));
  };
};

const setCategories = () => {
  return async dispatch => {
    const response = await axios.get('/api/categories');
    return dispatch(_setCategories(response.data));
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { setProducts, setCategories };
