import * as actionTypes from '../../actions/actionTypes';
import bitcoinReducer from './bitcoin';

describe('bitcoin Reducer', () => {
	const bitcoinMockData = { bpi: 'bitcoin price index' };
	it('should fetch and set the bitcoin data', () => {
		expect(bitcoinReducer({}, { type: actionTypes.FETCH_BITCOIN, bitcoin: bitcoinMockData })).toEqual(
			bitcoinMockData
		);
	});
});
