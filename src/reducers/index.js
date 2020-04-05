import { combineReducers } from 'redux';
import balance from './balance/balance';
import bitcoin from './bitcoin/bitcoin';
export default combineReducers({ balance, bitcoin });
