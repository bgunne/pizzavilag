import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            email: '',
            password: '',
            password2: '',
            firstname: '',
            lastname: '',
            phone: '',
            zip: '',
            city: '',
            address: '',
            comment: '',
            showFail: false,
            passwordFail: false,
            passwordLengthFail: false,
            emailFail: false
        };

    }
    handleSubmitButton = (isOrder) => {
        if (!isOrder) {
            return (
                <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0"
                    style={{ background: "#c4954f" }}
                    onClick={this.onSubmit}>
                    Regisztráció
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
                            <Form.Label>Jelszó (minimum 8 karakter)</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Jelszó"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="password2">
                            <Form.Label>Jelszó megerősítése</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Jelszó"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>
            );
        }
    }


    onFormChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state !== prevState) {
            this.props.loadUser(this.state);
        }
    }

    onSubmit = async () => {
        const { email, password, password2, firstname, lastname, phone, zip, city, address, comment } = this.state;

        const blackList = [",", "@", "(", ")", "'", "\"", "`", ";", "#", "_", "<", ">", "+", "[", "]", "{", "}"];
        let formatFail = false;
        blackList.forEach(char => {
            if (email.includes(char, email.search("@") + 1) && !this.props.isOrder) {
                formatFail = true;
            }
        }
        )
        if ((!email.includes("@") || !email.includes(".", email.search("@")) || formatFail) && !this.props.isOrder) {
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
            const response = await fetch('https://shielded-coast-80926.herokuapp.com/register',
                {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify
                        (
                            {
                                email: email,
                                password: password,
                                firstname: firstname,
                                lastname: lastname,
                                phone: phone,
                                zip: zip,
                                city: city,
                                address: address,
                                comment: comment,
                                joined: new Date()
                            }
                        )
                });
            const user = await response.json();
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('signedin');
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
                        Hibás e-mail cím formátum!
                </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => { this.handleAlert("emailFail", false); this.handleAlert("formatFail", false); }} variant="outline-danger">
                            Bezárás
                </Button>
                    </div>
                </Alert>
                <Alert show={this.state.passwordLengthFail} variant="danger" >
                    <p>
                        A jelszónak legalább 8 karakterből kell állnia.
                </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.handleAlert("passwordLengthFail", false)} variant="outline-danger">
                            Bezárás
                </Button>
                    </div>
                </Alert>
                <Alert show={this.state.passwordFail} variant="danger" >
                    <p>
                        A megadott jelszavak nem egyeznek.
                </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.handleAlert("passwordFail", false)} variant="outline-danger">
                            Bezárás
                </Button>
                    </div>
                </Alert>
                <Alert show={this.state.showFail} variant="danger" >
                    <p>
                        Kérlek tölts ki minden kötelező mezőt!
                </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.handleAlert("showFail", false)} variant="outline-danger">
                            Bezárás
                </Button>
                    </div>
                </Alert>
                <Form.Group controlId="email">
                    <Form.Label>E-mail cím</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="pelda@pizzavilag.hu"
                        onChange={this.onFormChange} />
                </Form.Group>

                {this.handlePassword(this.props.isOrder)}

                <Form.Row>
                    <Col>
                        <Form.Group controlId="lastname">
                            <Form.Label>Vezetéknév</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Vezetéknév"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="firstname">
                            <Form.Label>Keresztnév</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Keresztnév"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Group controlId="phone">
                    <Form.Label>Telefonszám</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Telefonszám"
                        onChange={this.onFormChange} />
                </Form.Group>
                <Form.Row>
                    <Col className="col-5">
                        <Form.Group controlId="zip">
                            <Form.Label>Irányítószám</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Irányítószám"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>

                    <Col className="col-7">
                        <Form.Group controlId="city">
                            <Form.Label>Település</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Település"
                                onChange={this.onFormChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>


                <Form.Group controlId="address">
                    <Form.Label>Cím</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cím"
                        onChange={this.onFormChange} />
                </Form.Group>

                <Form.Group controlId="comment">
                    <Form.Label>Megjegyzés a címhez</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pl.: Kapucsengő száma - nem kötelező kitölteni!"
                        onChange={this.onFormChange} />
                </Form.Group>


                {this.handleSubmitButton(this.props.isOrder)}
            </Form>
        );
    }

}

export default Register;