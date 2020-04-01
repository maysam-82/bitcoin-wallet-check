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
	it('should create an input to deposite into or withdraw from the balance', () => {
		expect(wrapper.find('.input-money').exists()).toBe(true);
	});
	describe('while entering an amount of money in input', () => {
		const amountOfMoney = '45	';
		beforeEach(() => {
			wrapper.find('.input-money').simulate('change', { target: { value: amountOfMoney } });
		});
		it('should update `moneyAmount` in `state`', () => {
			expect(wrapper.state().moneyAmount).toEqual(parseInt(amountOfMoney));
		});
	});
});
