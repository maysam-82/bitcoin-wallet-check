import rootReducer from './index';
describe('root Reducer', () => {
	it('should initialize the default state', () => {
		expect(rootReducer({}, {})).toEqual({ balance: { balanceValue: 0 }, bitcoin: {} });
	});
});
