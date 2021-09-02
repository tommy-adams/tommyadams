import types from "src/actions/types";

const initialState = {
	assignments: []
};

const loadAssignments = (state, assignments) => {
  return { ...state, assignments, total: assignments.length };
};

const createAssignment = (state, newAssignment) => {
	const { assignments, total } = state;
	return { ...state, assignments: [ ...assignments, newAssignment ], total: total + 1 };
};

const updateAssignment = (state, updatedAssignment) => {
	const { assignments } = state;
	const tempAssignments = assignments;
	const index = tempAssignments.findIndex(x => x._id === updatedAssignment._id);
	tempAssignments.splice(index, 1);
	tempAssignments.push(updatedAssignment);
	return { ...state, assignments: tempAssignments };
};

const deleteAssignment = (state, deletedAssignment) => {
	const { assignments, total } = state;
	const tempAssignments = assignments;
	const index = tempAssignments.findIndex(x => x._id === deletedAssignment._id);
	tempAssignments.splice(index, 1);
	return { ...state, assignments: tempAssignments, total: total - 1 };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_ASSIGNMENTS_SUCCESS:
			return loadAssignments(state, action.payload);
		case types.CREATE_ASSIGNMENT_SUCCESS:
			return createAssignment(state, action.payload);
		case types.UPDATE_ASSIGNMENT_SUCCESS:
			return updateAssignment(state, action.payload);
		case types.DELETE_ASSIGNMENT_SUCCESS:
			return deleteAssignment(state, action.payload);
		default:
			return state;
	}
}