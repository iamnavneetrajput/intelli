// src/store/actions.js

export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
