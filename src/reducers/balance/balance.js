import * as actionTypes from '../../actions/actionTypes';
const initialState = {
	balanceValue: 0,
};
const balance = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_BALANCE:
			return action.balance;

		default:
			return state;
	}
};

export default balance;
