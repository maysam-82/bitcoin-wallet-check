import React from 'react';
import { mount, shallow } from 'enzyme';
import { Bitcoin } from './Bitcoin';

describe('Bitcoin Component', () => {
	const mockFetchBitcoin = jest.fn();
	let props = { balance: 10, bitcoin: {} };
	let wrapper = shallow(<Bitcoin {...props} />);
	it('should render Bitcoin component correctly', () => {
		expect(wrapper.debug()).toMatchSnapshot();
	});
	describe('when Bitcoin mounted', () => {
		beforeEach(() => {
			props.fetchBitcoin = mockFetchBitcoin;
			wrapper = mount(<Bitcoin {...props} />);
		});
		it('should dispatch the `fetchBitcoin` method it receives from props', () => {
			expect(mockFetchBitcoin).toHaveBeenCalled();
		});
	});
	describe('when there are valid bitcoin props', () => {
		beforeEach(() => {
			props = { balance: 15, bitcoin: { bpi: { USD: { rate: '1,500' } } } };
			wrapper = shallow(<Bitcoin {...props} />);
		});
		it('should display the correct bitcoin value', () => {
			expect(wrapper.find('h3').text()).toEqual('Bitcoin Balance: 0.01');
		});
	});
});
