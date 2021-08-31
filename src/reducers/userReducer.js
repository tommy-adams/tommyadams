import types from "src/actions/types";

const initialState = {
	user: []
};

const loadUser = (state, user) => {
  return { ...state, user, total: 1 };
};

const createUser = (state, newUser) => {
	return { ...state, user: newUser, total: 1 };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch(action.type) {
		case types.LOAD_USER_SUCCESS:
			return loadUser(state, action.payload);
		case types.CREATE_USER_SUCCESS:
			return createUser(state, action.payload);
		default:
			return state;
	}
}