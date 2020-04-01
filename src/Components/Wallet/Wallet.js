import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			moneyAmount: 0,
		};
	}
	onMoneyChanged = ({ target: { value } }) => {
		const moneyAmount = parseInt(value);
		this.setState({ moneyAmount });
	};
	render() {
		const { balance } = this.props;
		return (
			<div>
				<h2 className="balance">Money Balance: {balance}</h2>
				<input className="input-money" onChange={this.onMoneyChanged} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { balance: state.balance.balanceValue };
};

export default connect(mapStateToProps)(Wallet);
