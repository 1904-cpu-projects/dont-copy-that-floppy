import axios from 'axios'
// Product Actions
const SET_PRODUCTS = 'SET_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT'

const _setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products
  };
};

const _removeProduct = productId => {
  return {
    type: REMOVE_PRODUCT,
    productId
  };
};

const _editProduct = product

export const setProducts = () => {
  return async dispatch => {
    const response = await axios.get('/api/products');
    return dispatch(_setProducts(response.data));
  };
};

export const removeProduct = productId => {
  return async dispatch => {
    await axios.delete(`/api/products/${productId}`);
    return dispatch(_removeProduct(productId));
  };
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      state = [...state, action.products].flat();
      break;
    case REMOVE_PRODUCT:
      state = state.filter(product => product.id !== action.productId);
      break;
  }
  return state;
};
