import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDeposite, setWithdraw } from '../../actions/balance/balance';

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
		const { balance, withdraw, deposite } = this.props;
		const { moneyAmount } = this.state;
		return (
			<div>
				<h2 className="balance">Money Balance: {balance}</h2>
				<input className="input-money" onChange={this.onMoneyChanged} value={moneyAmount} />
				<button className="btn-deposite" onClick={() => deposite(moneyAmount)}>
					Deposite
				</button>
				<button className="btn-withdraw" onClick={() => withdraw(moneyAmount)}>
					Withdraw
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { balance: state.balance.balanceValue };
};
const mapDispatchToProps = dispatch => {
	return {
		deposite: deposite => dispatch(setDeposite(deposite)),
		withdraw: withdrawal => dispatch(setWithdraw(withdrawal)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
