import * as actionTypes from '../../actions/actionTypes';
const balance = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.SET_BALANCE:
			return action.balance;

		default:
			return state;
	}
};

export default balance;
