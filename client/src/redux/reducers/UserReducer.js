import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/UserAction';

const initialState = {
    loginStatus: false,
  };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default loginReducer;