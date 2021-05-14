import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
  } from "../action/actionTypes";
  
const _nullSession = { username: null }
const session = (state = _nullSession, { type, user }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_USER:
      return user;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
export default session;