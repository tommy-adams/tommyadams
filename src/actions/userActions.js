import types from "./types";
import axios from "axios";

export const userLogin = data => async dispatch => {
  await axios.post("/api/login", data)
    .then(async u => dispatch({
      type: types.LOAD_USER_SUCCESS,
      payload: await u.data
    }));

  return "Success";
};

export const createUser = data => async dispatch => {
  await axios.post("/api/subscribe", data)
    .then(async u => dispatch({
      type: types.CREATE_USER_SUCCESS,
      payload: await u.data
    }));

  return "Success";
};

export const loadUser = id => async dispatch => {
  await axios.get(`/api/get-user?_id=${id}`)
    .then(async u => dispatch({
      type: types.LOAD_USER_SUCCESS,
      payload: await u.data
    }));

  return "Success";
};