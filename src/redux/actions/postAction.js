import { FETCH_POST, FETCH_SINGLE_POST, FETCH_USERS, FETCH_USERS_POST, FILTER_POSTS, LOADING } from "./types";

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

const filterPosts = (type, value) => async (dispatch) => {
  try {
    console.log(type, value);
    dispatch({ type: LOADING });
    const response = await api.get("posts", {
      params: {
        [type]: value,
      },
    });

    dispatch({ type: FILTER_POSTS, payload: response.data });
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

const filterUser = (value) => async (dispatch) => {
  try {
    const response = await api.get("users");
    let newArray = response.data.filter((d) => {
      let searchValue = d.name.toLowerCase();
      return searchValue.indexOf(value) != -1;
    });

    dispatch({ type: FETCH_USERS, payload: newArray });
  } catch (e) {
    throw e;
  }
};

const fetchUsersPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await api.get("posts", {
      params: {
        userId: id,
      },
    });
    dispatch({ type: FETCH_USERS_POST, payload: response.data });
  } catch (e) {
    throw e;
  }
};

export { fetchPosts, filterPosts, fetchPost, fetchUsers, fetchUsersPost, filterUser };
