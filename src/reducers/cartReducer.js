import axios from 'axios'
// Cart Actions
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_QUANTITY = 'SUBTRACT_QUANTITY';
const SET_CART = 'SET_CART';
const DELETE_CART = 'DELETE_CART';

const _setCart = cart => {
  return {
    type: SET_CART,
    cart
  };
};

const _addProduct = addedProduct => {
  return {
    type: ADD_PRODUCT,
    addedProduct
  };
};

const _deleteProduct = deletedProduct => {
  return {
    type: DELETE_PRODUCT,
    deletedProduct
  };
};

const _changeQuantity = product => {
  return {
    type: CHANGE_QUANTITY,
    product
  };
};

const _deleteCart = products => {
  return {
    type: DELETE_CART,
    products
  };
};

export const setCart = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/cart');
      dispatch(_setCart(response.data));
    } catch (ex) {
      console.log(ex);
    }
  };
};

export const addProduct = addedProduct => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/cart', addedProduct);
      dispatch(_addProduct(response.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteProduct = deletedProduct => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/${deletedProduct.id}`);
      dispatch(_deleteProduct(deletedProduct));
    } catch (err) {
      console.error(err);
    }
  };
};

export const changeQuantity = product => {
  return async dispatch => {
    try {
      await dispatch(_changeQuantity(product));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteCart = () => {
  return async dispatch => {
    try {
      await axios.delete('/api/cart');
      dispatch(_deleteCart());
    } catch (err) {
      console.error(err);
    }
  };
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case DELETE_CART:
      state = [];
      return state;
    case ADD_PRODUCT:
      const alreadyAdded = state.forEach(product => {
        if (product.id === action.addedProduct.id) {
          product.quantity++;
          return alreadyAdded;
        }
      });
      action.addedProduct.quantity = 1;
      return [...state, action.addedProduct];
    case DELETE_PRODUCT:
      const updatedProducts = state.filter(product => {
        return product.id !== action.deletedProduct.id;
      });
      return updatedProducts;
    case CHANGE_QUANTITY:
      state.forEach(product => {
        if (product.id === action.product.productId) {
          product.quantity = action.product.newQuantity;
        }
        return state;
      });
  }
  return state;
};
