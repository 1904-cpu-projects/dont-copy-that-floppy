import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

// Product Actions
const SET_PRODUCTS = "SET_PRODUCTS";

// Category Actions
const SET_CATEGORIES = "SET_CATEGORIES";

// Login Actions
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// User Actions
const CREATE_USER = "CREATE_USER";

// Catch Errors
const CATCH_ERROR = "CATCH_ERROR";

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
    case LOGOUT_USER:
      state = {}
      return state
  }
  return state
};

const userReducer = (state = {}, action)=>{
  switch (action.type) {
    case CREATE_USER:
      return action.user
  }

  return state;
}

const errorReducer = (state = "", action)=>{
  switch (action.type) {
    case CATCH_ERROR:
      return action.error
  }

  return state;
}

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  loggedInUser: loginReducer,
  user: userReducer,
  error: errorReducer,
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
  return {
    type: LOGIN_USER,
    email
  }
}

const _logoutUser = ()=>{
  return {
    type: LOGOUT_USER
  }
}

const _createUser = (user)=>{
  return {
    type: CREATE_USER,
    user
  }
}

const _catchError = (error)=>{
  return {
    type: CATCH_ERROR,
    error
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

const logoutUser = () => {
  return async dispatch => {
    await axios.delete('/login');
    dispatch(_logoutUser());
  }
}

const createUser = (user) => {
  return async dispatch => {
    try{
      const response = await axios.post("/api/users", user);
      dispatch(_createUser(response.data));
      window.location.hash = '/login';
    }
    catch(ex){
      dispatch(_catchError(ex.response.data));
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { setProducts, setCategories, loginUser, createUser, logoutUser };
