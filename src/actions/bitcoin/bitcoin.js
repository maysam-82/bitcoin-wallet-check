import * as actionTypes from '../actionTypes';

export const fetchBitcoin = () => (dispatch) => {
	return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((response) => response.json())
		.then((json) => dispatch({ type: actionTypes.FETCH_BITCOIN, bitcoin: json }));
};
