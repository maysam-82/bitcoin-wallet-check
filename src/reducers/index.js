import { combineReducers } from 'redux';
import balanceReducer from './balance/balance';
export default combineReducers({
	balance: balanceReducer,
});
