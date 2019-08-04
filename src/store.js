import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

// Product Actions
const SET_PRODUCTS = "SET_PRODUCTS";

// Category Actions
const SET_CATEGORIES = "SET_CATEGORIES";

// Login Actions
const LOGIN_USER = "LOGIN_USER";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...state, action.products].flat();
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

const loginReducer = (state = { email: "" }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, email: action.email}
  }
  return state
};

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  loggedInUser: loginReducer
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

const _loginUser = email => {
  console.log("Got here")
  return {
    type: LOGIN_USER,
    email
  }
}

const setProducts = () => {
  return async dispatch => {
    const response = await axios.get("/api/products");
    return dispatch(_setProducts(response.data));
  };
};

const setCategories = () => {
  return async dispatch => {
    const response = await axios.get("/api/categories");
    return dispatch(_setCategories(response.data));
  };
};

const loginUser = () => {
  return async dispatch => {
    const response = await axios.get("/login")
    return dispatch(_loginUser(response.data))
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { setProducts, setCategories, loginUser };
