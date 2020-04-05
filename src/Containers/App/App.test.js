import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
	const wrapper = shallow(<App />);
	it('should render App properly', () => {
		expect(wrapper.debug()).toMatchSnapshot();
	});
	it('should render `Connect(Wallet)` component', () => {
		expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
	});
	it('should render `Connect(Bitcoin)` component', () => {
		expect(wrapper.find('Connect(Bitcoin)').exists()).toBe(true);
	});
	it('should contain a link to the coindesk price page', () => {
		expect(wrapper.find('a').props().href).toBe('https://www.coindesk.com/price/bitcoin');
	});
});
