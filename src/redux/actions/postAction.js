import { FETCH_POST, FETCH_USERS, LOADING } from "./types";

import api from "../../api";

const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get("posts");
    dispatch({ type: FETCH_POST, payload: response.data });
  } catch (e) {
    throw e;
  }
};

const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get("users");
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (e) {
    throw e;
  }
};

export { fetchPosts, fetchUsers };
