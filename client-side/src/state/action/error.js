
import * as actions from "./actionTypes";

export const receiveErrors = ({ message }) => ({
  type: actions.RECEIVE_ERRORS,
  message
});

export const clearErrors = () => ({
  type: actions.CLEAR_ERRORS
});
