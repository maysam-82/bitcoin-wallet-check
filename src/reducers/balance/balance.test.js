import balanceReducer from './balance';
import * as actionTypes from '../../actions/actionTypes';

describe('balanceReducer', () => {
	it('should set a balance', () => {
		const balance = 10;
		expect(balanceReducer({}, { type: actionTypes.SET_BALANCE, balance })).toEqual(balance);
	});
});
