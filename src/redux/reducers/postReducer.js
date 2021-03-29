import { FETCH_POST, FETCH_SINGLE_POST, FETCH_USERS, FETCH_USERS_POST, FILTER_POSTS, LOADING } from "../actions/types";

const intial_state = {
  loading: false,
  posts: [],
  post: [],
  users: [],
  userpost: [],
  error: "",
};

export default (state = intial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_POST:
      return { ...state, posts: action.payload, loading: false };
    case FILTER_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case FETCH_SINGLE_POST:
      return { ...state, post: action.payload, loading: false };
    case FETCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_POST:
      return { ...state, userpost: action.payload, loading: false };
    default:
      return state;
  }
};
