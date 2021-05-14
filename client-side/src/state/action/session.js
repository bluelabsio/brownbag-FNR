import { receiveErrors } from "./error";

import * as actions from "./actionTypes";

const receiveCurrentUser = user => ({
  type: actions.RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: actions.LOGOUT_CURRENT_USER
});

//These are the action creators that will dispatch the actions defined above.

export const login = user => dispatch => {
  const admin = {
    username: 'admin',
    password: 'BruceLee'
  };

  const adminSession = {
    username: admin.username,
    name: 'Admin',
    email: 'rick.nunes@bluelabs.com'
  };

  
  if (user.username === admin.username.toLowerCase() && user.password === admin.password)
    dispatch(receiveCurrentUser(adminSession));
  else
    dispatch(receiveErrors({}));
};

export const logout = () => async dispatch => {
  dispatch(logoutCurrentUser());
};