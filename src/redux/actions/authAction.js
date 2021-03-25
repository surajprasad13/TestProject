import { FETCH_USERS, LOADING } from "./types";

import api from "../../api";

const loginUser = () => async (dispatch) => {
  try {
    const response = await api.get("users");
  } catch (e) {
    throw e;
  }
};

const registerUser = () => async (dispatch) => {
  try {
    const response = await api.get("users");
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

export { loginUser, registerUser, fetchUsers };
