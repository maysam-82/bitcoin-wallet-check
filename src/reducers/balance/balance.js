import * as actionTypes from '../../actions/actionTypes';
const initialState = {
	balanceValue: 0,
};
const balance = (state = initialState, action) => {
	const { balanceValue } = state;
	switch (action.type) {
		case actionTypes.SET_BALANCE:
			const { balance } = action;
			return { ...state, balanceValue: balance };
		case actionTypes.SET_DEPOSITE:
			const { deposite } = action;
			return { ...state, balanceValue: balanceValue + deposite };
		case actionTypes.SET_WITHDRAW:
			const { withdraw } = action;
			return { ...state, balanceValue: balanceValue - withdraw };

		default:
			return state;
	}
};

export default balance;
