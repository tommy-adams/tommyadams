import types from "./types";
import axios from "axios";

export const loadAssignments = id => async dispatch => {
  await axios.get(`/api/get-assignments?userId=${id}`)
    .then(async a => dispatch({
      type: types.LOAD_ASSIGNMENTS_SUCCESS,
      payload: await a.data
    }));

  return "Success";
};

export const createAssignment = data => async dispatch => {
  await axios.post("/api/add-assignment", data)
    .then(async a => dispatch({
      type: types.CREATE_ASSIGNMENT_SUCCESS,
      payload: await a.data
    }));

  return "Success";
};

export const updateAssignment = data => async dispatch => {
  await axios.patch("/api/edit-assignment", data)
    .then(async a => dispatch({
      type: types.UPDATE_ASSIGNMENT_SUCCESS,
      payload: await a.data
    }));

  return "Success";
};

export const deleteAssignment = id => async dispatch => {
  await axios.delete(`/api/delete-assignment?_id=${id}`)
    .then(async a => dispatch({
      type: types.DELETE_ASSIGNMENT_SUCCESS,
      payload: await a.data
    }));

  return "Success";
};

export const deleteAssignmentsByClass = classId => async dispatch => {
  await axios.delete(`/api/delete-by-class?classId=${classId}`)
    .then(async a => dispatch({
      type: types.DELETE_ASSIGNMENTS_SUCCESS,
      payload: await a.data
    }));

  return "Success";
};