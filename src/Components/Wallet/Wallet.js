import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDeposite, setWithdraw } from '../../actions/balance/balance';
import './wallet.scss';

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
			<div className="wallet-container">
				<h2 className="balance">Money Balance: {balance}</h2>
				<div className="input-container">
					<input className="input-money" onChange={this.onMoneyChanged} value={moneyAmount} />
				</div>
				<div className="button-container">
					<button className="btn-deposite" onClick={() => deposite(moneyAmount)}>
						Deposite
					</button>
				</div>
				<div className="button-container">
					<button className="btn-withdraw" onClick={() => withdraw(moneyAmount)}>
						Withdraw
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { balance: state.balance.balanceValue };
};
const mapDispatchToProps = (dispatch) => {
	return {
		deposite: (deposite) => dispatch(setDeposite(deposite)),
		withdraw: (withdrawal) => dispatch(setWithdraw(withdrawal)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
