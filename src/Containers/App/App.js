import React from 'react';
import Wallet from '../../Components/Wallet/Wallet';
import Bitcoin from '../../Components/Bitcoin/Bitcoin';
import './App.scss';

const App = () => {
	return (
		<div>
			<h2>Money Check</h2>
			<Wallet />
			<Bitcoin />
			<div className="coindesk-container">
				Powered by{' '}
				<a target="_blank" href="https://www.coindesk.com/price/bitcoin">
					CoinDesk
				</a>
			</div>
		</div>
	);
};

export default App;
