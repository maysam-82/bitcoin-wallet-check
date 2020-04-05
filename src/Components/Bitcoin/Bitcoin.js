import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../../actions/bitcoin/bitcoin';

export class Bitcoin extends Component {
	componentDidMount() {
		this.props.fetchBitcoin();
	}
	calculateBitcoin = () => {
		const { balance, bitcoin } = this.props;
		if (Object.keys(bitcoin).length === 0 || !balance) return '';
		return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''));
	};
	render() {
		return <h3>Bitcoin Balance: {this.calculateBitcoin()}</h3>;
	}
}

const mapStateToProps = ({ bitcoin, balance: { balanceValue } }) => {
	return {
		bitcoin,
		balance: balanceValue,
	};
};

export default connect(mapStateToProps, { fetchBitcoin })(Bitcoin);
