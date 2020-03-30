import balanceReducer from './balance';
import * as actionTypes from '../../actions/actionTypes';

describe('balanceReducer', () => {
	it('should set a balance', () => {
		const balance = 10;
		expect(balanceReducer({}, { type: actionTypes.SET_BALANCE, balance })).toEqual({ balanceValue: 10 });
	});
	it('should deposite into the balance', () => {
		const deposite = 15;
		const initialState = { balanceValue: 10 };

		expect(balanceReducer(initialState, { type: actionTypes.SET_DEPOSITE, deposite })).toEqual({
			balanceValue: 25,
		});
	});
});
