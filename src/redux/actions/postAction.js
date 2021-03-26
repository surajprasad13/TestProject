import { FETCH_POST, FETCH_SINGLE_POST, FETCH_USERS, LOADING } from "./types";

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

const fetchPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get(`posts/${id}`);

    dispatch({ type: FETCH_SINGLE_POST, payload: response.data });
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

export { fetchPosts, fetchPost, fetchUsers };
