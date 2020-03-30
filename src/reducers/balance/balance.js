import * as actionTypes from '../../actions/actionTypes';
const initialState = {
	balanceValue: 0,
};
const balance = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_BALANCE:
			const { balance } = action;
			return { ...state, balanceValue: balance };
		case actionTypes.SET_DEPOSITE:
			const { deposite } = action;
			const { balanceValue } = state;
			return { ...state, balanceValue: balanceValue + deposite };

		default:
			return state;
	}
};

export default balance;
