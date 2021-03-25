import { FETCH_POST, LOADING } from "../actions/types";

const intial_state = {
  loading: false,
  posts: [],
  users: [],
  error: "",
};

export default (state = intial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_POST:
      return { ...state, posts: action.payload, loading: false };

    default:
      return state;
  }
};
