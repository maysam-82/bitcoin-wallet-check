import * as actionTypes from '../../actions/actionTypes';

const bitcoin = (state = {}, action) => {
	const { bitcoin, type } = action;
	switch (type) {
		case actionTypes.FETCH_BITCOIN:
			return bitcoin;

		default:
			return state;
	}
};

export default bitcoin;
