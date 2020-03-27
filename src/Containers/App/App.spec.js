import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
	const wrapper = shallow(<App />);
	it('should render App properly', () => {
		expect(wrapper.debug()).toMatchSnapshot();
	});
});
