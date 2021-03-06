import { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../action/actionTypes";

const error = (state = "", { message, type }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};
export default error;