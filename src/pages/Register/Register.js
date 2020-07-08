import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { signIn } from '../../redux/actions/app.js';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Api from "../../api/Api.js";
import { Path } from '../../utils/Path';

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: () => signIn(dispatch)
	}
}
class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{
			showFail: false,
			passwordFail: false,
			passwordLengthFail: false,
			emailFail: false,
			email: '',
			password: '',
			password2: '',
			firstname: '',
			lastname: '',
			phone: '',
			zip: '',
			city: '',
			address: '',
			comment: ''
		};
	}
	handleSubmitButton = (isOrder) => {
		if (!isOrder) {
			return (
				<p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0"
					style={{ background: "#c4954f" }}
					onClick={this.onSubmit}>
					<FormattedMessage
						id="register.register" />
				</p>
			);
		}
	}
	handlePassword = (isOrder) => {
		if (!isOrder) {
			return (
				<Form.Row>
					<Col>
						<Form.Group controlId="password">
							<Form.Label>
								<FormattedMessage
									id="register.password" />
							</Form.Label>
							<Form.Control
								type="password"
								placeholder="Jelszó"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="password2">
							<Form.Label>
								<FormattedMessage
									id="register.passwordAgain" />
							</Form.Label>
							<Form.Control
								type="password"
								placeholder="Jelszó"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
				</Form.Row>
			);
		}
	}
	onRegisterFormChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	}
	onSubmit = async () => {
		const { email, password, password2, firstname, lastname, phone, zip, city, address, comment } = this.state;
		// eslint-disable-next-line
		const blackList = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //RFC 5322 Official Standard
		if (!blackList.test(email)) {
			this.handleAlert("emailFail", true);
		}
		else if (password.length < 8 && !this.props.isOrder) {
			this.handleAlert("passwordLengthFail", true);
		}
		else if (password !== password2 && !this.props.isOrder) {
			this.handleAlert("passwordFail", true);
		}
		else if ((!lastname || !firstname || !zip || !city || !address || !phone || !email || !password || !password2) && !this.props.isOrder) {
			this.handleAlert("showFail", true);
		}
		else {
			const user = await (await Api.register(email, password, firstname, lastname, phone, zip, city, address, comment)).json();
			if (user.id) {
				this.props.loadUser(user);
				this.props.signIn();
				this.props.history.push(Path.root);
			}
		}
	}
	handleAlert(type, show) {
		if (type === "showFail") {
			this.setState({ showFail: show });
		}
		else if (type === "passwordFail") {
			this.setState({ passwordFail: show });
		}
		else if (type === "passwordLengthFail") {
			this.setState({ passwordLengthFail: show });
		}
		else if (type === "emailFail") {
			this.setState({ emailFail: show });
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state !== prevState) {
			this.props.loadUser(this.state);
		}
	}
	render() {
		return (
			<Form className="w-80 center bg-light-yellow pa2 br3 mt2"
				onKeyPress={(ev) => {
					if (ev.key === 'Enter' && !this.props.isOrder) {
						this.onSubmit();
						ev.preventDefault();
					}
				}}>
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
				<Alert show={this.state.passwordLengthFail} variant="danger" >
					<p>
						<FormattedMessage
							id="alert.passwordLengthFail" />
					</p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={() => this.handleAlert("passwordLengthFail", false)} variant="outline-danger">
							<FormattedMessage
								id="alert.close" />
						</Button>
					</div>
				</Alert>
				<Alert show={this.state.passwordFail} variant="danger" >
					<p>
						<FormattedMessage
							id="alert.passwordFail" />
					</p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={() => this.handleAlert("passwordFail", false)} variant="outline-danger">
							<FormattedMessage
								id="alert.close" />
						</Button>
					</div>
				</Alert>
				<Alert show={this.state.showFail} variant="danger" >
					<p>
						<FormattedMessage
							id="alert.admin" />
					</p>
					<hr />
					<div className="d-flex justify-content-end">
						<Button onClick={() => this.handleAlert("showFail", false)} variant="outline-danger">
							<FormattedMessage
								id="register.close" />
						</Button>
					</div>
				</Alert>
				<Form.Group controlId="email">
					<Form.Label>
						<FormattedMessage
							id="register.email" />
					</Form.Label>
					<Form.Control
						type="email"
						placeholder="pelda@pizzavilag.hu"
						onChange={this.onRegisterFormChange} />
				</Form.Group>
				{this.handlePassword(this.props.isOrder)}
				<Form.Row>
					<Col>
						<Form.Group controlId="lastname">
							<Form.Label>
								<FormattedMessage
									id="register.lastName" />
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Vezetéknév"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="firstname">
							<Form.Label>
								<FormattedMessage
									id="register.firstName" />
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Keresztnév"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Group controlId="phone">
					<Form.Label>
						<FormattedMessage
							id="register.phone" />
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="Telefonszám"
						onChange={this.onRegisterFormChange} />
				</Form.Group>
				<Form.Row>
					<Col className="col-5">
						<Form.Group controlId="zip">
							<Form.Label>
								<FormattedMessage
									id="register.zip" />
							</Form.Label>
							<Form.Control
								type="number"
								placeholder="Irányítószám"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
					<Col className="col-7">
						<Form.Group controlId="city">
							<Form.Label>
								<FormattedMessage
									id="register.city" />
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Település"
								onChange={this.onRegisterFormChange} />
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Group controlId="address">
					<Form.Label>
						<FormattedMessage
							id="register.address" />
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="Cím"
						onChange={this.onRegisterFormChange} />
				</Form.Group>
				<Form.Group controlId="comment">
					<Form.Label>
						<FormattedMessage
							id="register.comment" />
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="Pl.: Kapucsengő száma - nem kötelező kitölteni!"
						onChange={this.onRegisterFormChange} />
				</Form.Group>
				{this.handleSubmitButton(this.props.isOrder)}
			</Form>
		);
	}
}
export default connect(null,mapDispatchToProps)(Register);