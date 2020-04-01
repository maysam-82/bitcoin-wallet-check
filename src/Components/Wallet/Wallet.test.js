import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet Component', () => {
	const mockDeposite = jest.fn();
	const mockWithdrawal = jest.fn();
	const props = { balance: 20, deposite: mockDeposite, withdraw: mockWithdrawal };
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
		describe('and the user wants to make a deposite into balance', () => {
			beforeEach(() => {
				wrapper.find('.btn-deposite').simulate('click');
			});
			it('should despatch the `setDeposite()` it receives from props with moneyAmount in local `state`', () => {
				expect(mockDeposite).toHaveBeenCalledWith(parseInt(amountOfMoney));
			});
		});
		describe('and the user wants to make a withdrawal from balance', () => {
			beforeEach(() => {
				wrapper.find('.btn-withdraw').simulate('click');
			});
			it('should despatch the `setWithdraw()` it receives from props with moneyAmount in local `state`', () => {
				expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(amountOfMoney));
			});
		});
	});
});
