import types from "./types";
import axios from "axios";

export const loadClasses = query => async dispatch => {
  await axios.get(`/api/get-classes${query}`)
    .then(async c => dispatch({
      type: types.LOAD_CLASSES_SUCCESS,
      payload: await c.data
    }));

  return "Success";
};

export const createClass = data => async dispatch => {
  await axios.post("/api/add-class", data)
    .then(async c => dispatch({
      type: types.CREATE_CLASS_SUCCESS,
      payload: await c.data
    }));

  return "Success";
};

export const updateClass = data => async dispatch => {
  await axios.patch("/api/edit-class", data)
    .then(async c => dispatch({
      type: types.UPDATE_CLASS_SUCCESS,
      payload: await c.data
    }));

  return "Success";
};

export const deleteClass = id => async dispatch => {
  await axios.delete(`/api/delete-class?_id=${id}`)
    .then(async c => dispatch({
      type: types.DELETE_CLASS_SUCCESS,
      payload: await c.data
    }));

  return "Success";
};