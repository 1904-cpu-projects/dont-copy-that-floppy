import axios from 'axios';
//Order Actions
const GET_ORDERS = 'GET_ORDERS';
const GET_ORDER = 'GET_ORDER';

const _getOrders = user => {
  return {
    type: GET_ORDERS,
    user
  }
}

const _getOrder = id => {
  return {
    type: GET_ORDER,
    id
  }
}

export const getOrders = user => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/users/${user.id}/orders`);
      dispatch(_getOrders(response.data));
    }catch (ex){
      console.log(ex);
    }
  }
}

export const getOrder = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/orders/${id}`);
      dispatch(_getOrder(response.data));
    }catch (ex){
      console.log(ex);
    }
  }
}

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.user;
    case GET_ORDER:
      return action.id;
  }
  return state;
};
