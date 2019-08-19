import axios from "axios";
import { type } from "os";
// Product Actions
const SET_PRODUCTS = "SET_PRODUCTS";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const NEW_PRODUCT = "EDIT_PRODUCT";

const _setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products
  };
};

const _newProduct = product => {
  return {
    type: NEW_PRODUCT,
    product
  };
};
const _removeProduct = productId => {
  return {
    type: REMOVE_PRODUCT,
    productId
  };
};

const _editProduct = product => {
  return {
    type: EDIT_PRODUCT,
    product
  };
};

export const setProducts = () => {
  return async dispatch => {
    const response = await axios.get("/api/products");
    return dispatch(_setProducts(response.data));
  };
};

export const newProduct = product => {
  return async dispatch => {
    const response = await axios.post("/api/products", product);
    return dispatch(_newProduct(response.data));
  };
};
export const removeProduct = productId => {
  return async dispatch => {
    await axios.delete(`/api/products/${productId}`);
    return dispatch(_removeProduct(productId));
  };
};

export const editProduct = (productId, product) => {
  return async dispatch => {
    const res = await axios.put(`/api/products/${productId}`, product);
    return dispatch(_editProduct(res.data));
  };
};

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      state = [...state, action.products].flat();
      break;
    case NEW_PRODUCT:
      state = [...state, action.product];
      break;
    case REMOVE_PRODUCT:
      state = state.filter(product => product.id !== action.productId);
      break;
    case EDIT_PRODUCT:
      state = [...state].map(_product => {
        if (_product.id !== action.product.id) {
          return _product;
        }
        return action.product;
      });
      break;
  }
  return state;
};
