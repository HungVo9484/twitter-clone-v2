import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import { authActions } from './auth_slice';
import { utilsActions } from './utils_slice';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch(utilsActions.begin());
    const res = await axios.get('http://127.0.0.1:5000/auth');
    console.log(res.data);
    console.log('vo day ko', res.data);
    dispatch(
      authActions.addUser(res.data)
    );
  } catch (err) {
    console.log(err);
  }
  dispatch(utilsActions.end());
};

export const register = (
  name,
  email,
  password,
  birthday,
  history
) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password, birthday });
    try {
      dispatch(utilsActions.begin());
      const res = await axios.post(
        'http://127.0.0.1:5000/users',
        body,
        config
      );
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      // dispatch(loadUser());
      dispatch(utilsActions.end());
      dispatch(authActions.register());
      history.push('/home');
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        return dispatch(utilsActions.end(errors));
      }
      console.log(err.message);
    }
  };
};

export const login = (email, password, history) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      dispatch(utilsActions.begin());
      const res = await axios.post(
        'http://127.0.0.1:5000/auth',
        body,
        config
      );
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      // dispatch(loadUser());
      dispatch(utilsActions.end());
      dispatch(authActions.login());
      history.push('/home');
    } catch (err) {
      if (err.response){
      const errors = err.response.data.errors;
      if (errors) {
        return dispatch(utilsActions.end(errors));
      }}
      console.log(err.message);
    }
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(authActions.removeUser());
  dispatch(authActions.logout());
};
