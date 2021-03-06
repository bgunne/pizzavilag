import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Api from "../../api/Api.js";
import { Path } from '../../utils/Path.js';
import { UserActions } from '../../redux/actions/app.js';
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}
class Signin extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			showFail: false,
			signInEmail: '',
			signInPassword: ''
		}
	}
	onSigninFormChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	}
	onSubmit = async () => {
		const user = await (await Api.signIn(this.state.signInEmail, this.state.signInPassword)).json();
		if (user.id) {
			this.props.loadUser(user);
			this.props.dispatch(UserActions.signIn());
			this.props.history.push(Path.root);
			if (user.role === "admin") {
				this.props.dispatch(UserActions.admin());
				this.props.history.push(Path.admin);
			}
		}
		else {
			this.handleAlert("showFail", true);
		}
	}
	handleAlert(type, show) {
		if (type === "showFail") {
			this.setState({ showFail: show });
		}
	}
	render() {
		return (
			<Form className="w-80 center bg-light-yellow pa2 br3 mt2"
				onKeyPress={(ev) => {
					if (ev.key === 'Enter') {
						this.onSubmit();
						ev.preventDefault();
					}
				}}>
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
				<Form.Group controlId="signInEmail">
					<Form.Label>
						<FormattedMessage
							id="signin.email" />
					</Form.Label>
					<Form.Control
						type="email"
						placeholder="pelda@pizzavilag.hu"
						onChange={this.onSigninFormChange}
					/>
				</Form.Group>
				<Form.Group controlId="signInPassword">
					<Form.Label>
						<FormattedMessage
							id="signin.password" />
					</Form.Label>
					<Form.Control
						type="password"
						placeholder="Jelszó"
						onChange={this.onSigninFormChange}
					/>
				</Form.Group>
				<p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0"
					style={{ background: "#c4954f" }}
					onClick={this.onSubmit}>
					<FormattedMessage
						id="signin.signIn" />
				</p>
			</Form>
		);
	}
}
export default connect(null, mapDispatchToProps)(Signin);