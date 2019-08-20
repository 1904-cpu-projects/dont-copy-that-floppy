import axios from 'axios'
import { _catchError } from './errorReducer'
//Admin Actions
const GET_ALL_USERS = 'GET_ALL_USERS';
const REMOVE_USER = 'REMOVE_USER';

const _getUsers = users => {
  return {
    type: GET_ALL_USERS,
    users
  };
};

const _deleteUser = userId => {
  return {
    type: REMOVE_USER,
    userId
  };
};

export const getUsers = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/users');
      dispatch(_getUsers(response.data));
    } catch (ex) {
      dispatch(_catchError(ex.response.data));
    }
  };
};

export const deleteUser = userId => {
  return async dispatch => {
    await axios.delete(`/api/users/${userId}`);
    dispatch(_deleteUser(userId));
  };
};

export const adminReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      state = [...state, action.users].flat();
      break;
    case REMOVE_USER:
      state = state.filter(user => user.id !== action.userId);
      break;
  }
  return state;
};
