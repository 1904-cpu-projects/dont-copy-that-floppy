import axios from 'axios'
// Login Actions
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

const _loginUser = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

const _logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const loginUser = () => {
  return async dispatch => {
    const response = await axios.get('/login');
    dispatch(_loginUser(response.data));
    window.location.hash = '/';
  };
};

export const logoutUser = () => {
  return async dispatch => {
    await axios.delete('/login');
    dispatch(_logoutUser());
  };
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      state = {};
      return state;
  }
  return state;
};
