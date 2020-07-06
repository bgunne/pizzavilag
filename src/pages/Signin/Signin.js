import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { onSigninFormChange } from '../../redux/actions/signin.js';
import { signIn, admin } from '../../redux/actions/app.js';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Api from "../../api/Api.js";
import { Path } from '../../utils/Path.js';
const mapStateToProps = state => {
	return {
		signInEmail: state.onSigninFormChange.signInEmail,
		signInPassword: state.onSigninFormChange.signInPassword
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSigninFormChange: (data, targetId) => onSigninFormChange(dispatch, data, targetId),
		signIn: () => signIn(dispatch),
		admin: () => admin(dispatch)
	}
}
class Signin extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			showFail: false
		}
	}
	onSigninFormChange = (event) => {
		this.props.onSigninFormChange(event.target.value, event.target.id);
	}
	onSubmit = async () => {
		const user = await (await Api.signIn(this.props.signInEmail, this.props.signInPassword)).json();
		if (user.id) {
			this.props.loadUser(user);
			this.props.signIn();
			this.props.history.push(Path.root);
			if (user.role === "admin") {
				this.props.admin();
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
export default connect(mapStateToProps, mapDispatchToProps)(Signin);