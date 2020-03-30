import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
	render() {
		const { balance } = this.props;
		return (
			<div>
				<h2 className="balance">Money Balance: {balance}</h2>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { balance: state };
};

export default connect(mapStateToProps)(Wallet);
