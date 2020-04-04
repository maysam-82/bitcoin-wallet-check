import * as actionTypes from '../../actions/actionTypes';

import { BALANCE_COOKIE } from '../shared/constants/constants';
import { getBalance, setBalance } from './helpers';
const initialState = { balanceValue: 0 };
const balance = (state = getBalance(initialState, BALANCE_COOKIE), action) => {
	const { balanceValue } = state;
	let newState = { ...state };
	switch (action.type) {
		case actionTypes.SET_BALANCE:
			const { balance } = action;
			newState = { ...state, balanceValue: balance };
			setBalance(newState, BALANCE_COOKIE);
			return newState;
		case actionTypes.SET_DEPOSITE:
			const { deposite } = action;
			newState = { ...state, balanceValue: balanceValue + deposite };
			setBalance(newState, BALANCE_COOKIE);
			return newState;
		case actionTypes.SET_WITHDRAW:
			const { withdrawal } = action;
			newState = { ...state, balanceValue: balanceValue - withdrawal };
			setBalance(newState, BALANCE_COOKIE);
			return newState;
		default:
			return state;
	}
};

export default balance;
