import React, { Component } from 'react';
import Wallet from '../../Components/Wallet/Wallet';

class App extends Component {
	render() {
		return (
			<div>
				<h2>Money Check</h2>
				<Wallet />
			</div>
		);
	}
}

export default App;
