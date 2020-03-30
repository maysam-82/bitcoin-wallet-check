import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet Component', () => {
	const props = { balance: 20 };
	const wrapper = shallow(<Wallet {...props} />);
	it('should render Wallet component correctly', () => {
		expect(wrapper.debug()).toMatchSnapshot();
	});
	it('should display the balance equal to 20', () => {
		expect(wrapper.find('.balance').text()).toEqual('Money Balance: 20');
	});
});
