import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actionTypes from '../actionTypes';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' } };

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('should create an assync action to fetch the bitcoin value', () => {
	const expectedAction = [{ bitcoin: mockResponse.body, type: actionTypes.FETCH_BITCOIN }];
	return store.dispatch(fetchBitcoin()).then(() => {
		expect(store.getActions()).toEqual(expectedAction);
	});
});
