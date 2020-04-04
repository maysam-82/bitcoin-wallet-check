import balanceReducer from './balance';
import * as actionTypes from '../../actions/actionTypes';
import { BALANCE_COOKIE } from '../shared/constants/constants';
import { setBalance, getBalance } from './helpers';

describe('balanceReducer', () => {
	const initialState = { balanceValue: 10 };
	describe('balance initializing', () => {
		const balance = 10;
		it('should set a balance', () => {
			expect(balanceReducer(initialState, { type: actionTypes.SET_BALANCE, balance })).toEqual({
				balanceValue: 10,
			});
		});
		it('should return `{}` if there is no key in cookies', () => {
			expect(balanceReducer({}, {})).toEqual({});
		});

		it('should set balance to cookies', () => {
			expect(balanceReducer(setBalance(initialState, BALANCE_COOKIE), {})).toEqual(initialState);
		});

		it('should get balance from cookies and set to `state` ', () => {
			console.log(getBalance(initialState, BALANCE_COOKIE));
			expect(balanceReducer(getBalance(initialState, BALANCE_COOKIE), {})).toEqual(initialState);
		});
	});
	it('should deposite into the balance', () => {
		const deposite = 15;

		expect(balanceReducer(initialState, { type: actionTypes.SET_DEPOSITE, deposite })).toEqual({
			balanceValue: initialState.balanceValue + deposite,
		});
	});
	it('should withdraw from the balance', () => {
		const withdrawal = 15;
		const initialState = { balanceValue: 5 };

		expect(balanceReducer(initialState, { type: actionTypes.SET_WITHDRAW, withdrawal })).toEqual({
			balanceValue: initialState.balanceValue - withdrawal,
		});
	});
});
