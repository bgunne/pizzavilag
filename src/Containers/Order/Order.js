import React, { Component } from 'react';
import Register from '../Register/Register';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { loadGuest } from '../../redux/actions/order.js';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Api from "../../api/Api.js";
const mapStateToProps = state => {
	return {
		guest: state.manageGuest.guest,
		user: state.manageUser.user
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loadGuest: (data) => loadGuest(dispatch, data)
	}
}
class Order extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			showFail: false,
			showSuccess: false,
			formatFail: false,
			emailFail: false,
		}
	}
	loadUser = (reg) => {
		this.setState({ user: reg })
	}
	userSignedIn = (user) => {
		if (user.id) {
			return (
				<div className="w-50 mh1" >
					<article className="pa1 pa2-ns" style={{ float: "right" }}>
						<h1 className="f4 bold center mw6">
							<FormattedMessage
								id="order.details" />
						</h1>
						<ul className="list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow">
							<li className="ph3 pv3 bb b--light-silver">
								<FormattedMessage
									id="order.name" />: {user.lastname} {user.firstname}
							</li>
							<li className="ph3 pv3 bb b--light-silver">
								<FormattedMessage
									id="order.address" />: {user.address}
							</li>
							<li className="ph3 pv3 bb b--light-silver">
								<FormattedMessage
									id="order.phone" />: {user.phone}
							</li>
							<li className="ph3 pv3 bb b--light-silver">
								<FormattedMessage
									id="order.email" />: {user.email}
							</li>
							<li className="ph3 pv3">
								<FormattedMessage
									id="order.comment" />: {user.comment}
							</li>
						</ul>
					</article>
				</div>
			);
		}
		else {
			return (<Register loadUser={this.props.loadGuest} isOrder={true} />);
		}
	}
	onSubmit = async () => {
		const { shoppingCart } = this.props;
		let user = '';
		if (this.props.user.id) {
			user = this.props.user;
		}
		else {
			user = this.props.guest;
		}
		let userData = `${user.lastname} ${user.firstname}\n${user.zip} ${user.city} ${user.address}\nTel.: ${user.phone}\nE-mail: ${user.email}\nMegj.: ${user.comment}`;
		const blackList = [",", "@", "(", ")", "'", "\"", "`", ";", "#", "_", "<", ">", "+", "[", "]", "{", "}"];
		blackList.forEach(char => {
			if (user.email.includes(char, user.email.search("@") + 1)) {
				this.handleAlert("formatFail", true);
			}
		}
		)
		if (!user.email.includes("@") || !user.email.includes(".", user.email.search("@")) || this.state.formatFail) {
			this.handleAlert("emailFail", true);
		}
		else if (!user.lastname || !user.firstname || !user.zip || !user.city || !user.address || !user.phone || !user.email) {
			this.handleAlert("showFail", true);
		}
		else {
			let pizzas = '';
			shoppingCart.forEach(function (pizza, index) {
				pizzas += `${pizza.name} ${pizza.size} cm      ${pizza.price} Ft\n`;
			})
			Api.order(userData, pizzas, this.props.sumPrice);
			this.handleAlert("showSuccess", true);
			this.props.onEmptyCart();
		}
	}
	handleAlert(type, show) {
		if (type === "showFail") {
			this.setState({ showFail: show });
		}
		else if (type === "showSuccess") {
			this.setState({ showSuccess: show });
		}
		else if (type === "formatFail") {
			this.setState({ formatFail: show });
		}
		else if (type === "emailFail") {
			this.setState({ emailFail: show });
		}
	}
	render() {
		return (
			<div className="flex flex-column items-center " >
				<Alert show={this.state.emailFail} variant="danger" >
					<p>
						<FormattedMessage
							id="alert.emailFormatFail" />
					</p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={() => { this.handleAlert("emailFail", false); this.handleAlert("formatFail", false); }} variant="outline-danger">
							<FormattedMessage
								id="alert.close" />
						</Button>
					</div>
				</Alert>
				<Alert show={this.state.showSuccess} variant="success">
					<Alert.Heading>
						<FormattedMessage
							id="alert.confirm" />
					</Alert.Heading>
					<p>
						<FormattedMessage
							id="alert.thankyou" />
					</p>
					<hr />
					<p className="mb-0">
						<FormattedMessage
							id="alert.info" />
					</p>
				</Alert>
				<Alert show={this.state.showFail} variant="danger" >
					<p>
						<FormattedMessage
							id="alert.emailFormatFail" />
					</p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={() => this.handleAlert("showFail", false)} variant="outline-danger">
							<FormattedMessage
								id="alert.close" />
						</Button>
					</div>
				</Alert>
				<div className="w-100 mr2 flex justify-center">
					<div className="flex justify-center">
						{this.userSignedIn(this.props.user)}
						<div className="w-50 mh1" style={{ overflowY: 'auto', height: '600px' }}>
							<article className="pa1 pa2-ns" style={{ float: "left" }}>
								<ul className="list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow">
									{
										this.props.shoppingCart.map((pizza, i) => {
											return (
												<li className="ph3 pv3 bb b--light-silver tc" key={i}>
													<p>{pizza.name} {pizza.size} cm</p>
													<p>{pizza.price} Ft</p>
												</li>
											);
										})
									}
								</ul>
							</article>
						</div>
					</div>
				</div>
				<div className="w-25 mr2 flex">
					<p className="b red ">Végösszeg: {this.props.sumPrice} Ft</p>
					<p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 ml3"
						style={{ background: "#c4954f" }}
						onClick={() => {
							this.onSubmit();
						}}>
						<FormattedMessage
							id="order.checkout" />
					</p>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);