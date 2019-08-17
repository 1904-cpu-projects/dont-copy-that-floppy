import axios from 'axios';
//Order Actions
const GET_ORDERS = 'GET_ORDERS';

const _getOrders = user => {
  return {
    type: GET_ORDERS,
    user
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

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.user;
  }
  return state;
};
