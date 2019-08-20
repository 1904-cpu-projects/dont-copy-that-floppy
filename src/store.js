import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  productsReducer,
  removeProduct,
  setProducts,
  editProduct,
  newProduct
} from './reducers/productsReducer';
import { setCategories, categoriesReducer } from './reducers/categoriesReducer';
import { loginUser, logoutUser, loginReducer } from './reducers/loginReducer';
import { createUser, userReducer } from './reducers/userReducer';
import { errorReducer } from './reducers/errorReducer';
import {
  setCart,
  addProduct,
  deleteProduct,
  changeQuantity,
  deleteCart,
  cartReducer
} from './reducers/cartReducer';
import { getUsers, deleteUser, adminReducer } from './reducers/adminReducer'
import { getOrders, orderReducer, getOrder } from './reducers/orderReducer';

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  loggedInUser: loginReducer,
  user: userReducer,
  error: errorReducer,
  cart: cartReducer,
  users: adminReducer,
  orders: orderReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export {
  setProducts,
  setCategories,
  loginUser,
  createUser,
  logoutUser,
  addProduct,
  deleteProduct,
  changeQuantity,
  setCart,
  getUsers,
  deleteUser,
  removeProduct,
  deleteCart,
  editProduct,
  getOrders,
  getOrder,
  newProduct
};
