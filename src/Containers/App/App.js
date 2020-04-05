import React, { Component } from 'react';
import Wallet from '../../Components/Wallet/Wallet';
import Bitcoin from '../../Components/Bitcoin/Bitcoin';

class App extends Component {
	render() {
		return (
			<div>
				<h2>Money Check</h2>
				<Wallet />
				<Bitcoin />
			</div>
		);
	}
}

export default App;
