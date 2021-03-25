import { FETCH_USERS, LOADING, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const initial_state = {
  loading: false,
  email: "",
  password: "",
  message: "",
  error: "",
  users: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case REGISTER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REGISTER_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case FETCH_USERS:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};
