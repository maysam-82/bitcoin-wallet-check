import * as actionTypes from '../actionTypes';
export const setBalance = balance => ({ type: actionTypes.SET_BALANCE, balance });
export const setDeposite = deposite => ({ type: actionTypes.SET_DEPOSITE, deposite });
export const setWithdraw = withdrawal => ({ type: actionTypes.SET_WITHDRAW, withdrawal });
