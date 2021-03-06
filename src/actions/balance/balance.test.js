import * as actionTypes from '../actionTypes';
import * as actionsCreators from './balance';

it('should create an action and set the balance', () => {
	const balance = 0;
	const expectedAction = { type: actionTypes.SET_BALANCE, balance };
	expect(actionsCreators.setBalance(balance)).toEqual(expectedAction);
});
it('should create an action to deposit into the balance', () => {
	const depositValue = 25;
	const expectedAction = { type: actionTypes.SET_DEPOSITE, deposite: depositValue };
	expect(actionsCreators.setDeposite(depositValue)).toEqual(expectedAction);
});
it('should create an action to withdraw from the balance', () => {
	const withdrawal = 10;
	const expectedAction = { type: actionTypes.SET_WITHDRAW, withdrawal };
	expect(actionsCreators.setWithdraw(withdrawal)).toEqual(expectedAction);
});
