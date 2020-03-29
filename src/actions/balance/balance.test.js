import * as actionTypes from '../actionTypes';
import * as actionsCreators from './balance';

it('should create an action and set the balance', () => {
	const balance = 0;
	const expectedAction = { type: actionTypes.SET_BALANCE, balance };
	expect(actionsCreators.setBalance(balance)).toEqual(expectedAction);
});
