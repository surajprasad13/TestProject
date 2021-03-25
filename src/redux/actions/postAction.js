import { FETCH_POST, LOADING } from "./types";

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

export { fetchPosts };
