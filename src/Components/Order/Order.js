import React, { Component } from 'react';
import Register from '../Register/Register';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



class Order extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            showFail: false,
            showSuccess: false,
            formatFail: false,
            emailFail: false,
            user:
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
                comment: ''
            }
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
                        <h1 className="f4 bold center mw6">Rendelés adatai</h1>
                        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 bg-light-yellow">
                            <li className="ph3 pv3 bb b--light-silver">Név: {user.lastname} {user.firstname} </li>
                            <li className="ph3 pv3 bb b--light-silver">Cím: {user.address}</li>
                            <li className="ph3 pv3 bb b--light-silver">Telefonszám: {user.phone}</li>
                            <li className="ph3 pv3 bb b--light-silver">E-mail: {user.email}</li>
                            <li className="ph3 pv3">Megjegyzés: {user.comment}</li>
                        </ul>
                    </article>
                </div>
            );
        }
        else {
            return (<Register loadUser={this.loadUser} isOrder={true} />);
        }
    }

    onSubmit = async () => {

        const { shoppingCart } = this.props;
        let user = '';
        if (this.props.user.id) {
            user = this.props.user;
        }
        else {
            user = this.state.user;
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

            await fetch('https://shielded-coast-80926.herokuapp.com/order',
                {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify
                        (
                            {
                                user: userData,
                                pizzas: pizzas,
                                price: this.props.sumPrice
                            }
                        )
                });

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
                        Hibás e-mail cím formátum!
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => { this.handleAlert("emailFail", false); this.handleAlert("formatFail", false); }} variant="outline-danger">
                            Bezárás
                    </Button>
                    </div>
                </Alert>
                <Alert show={this.state.showSuccess} variant="success">
                    <Alert.Heading>Rendelésed fogadtuk.</Alert.Heading>
                    <p>
                        Köszönjük, hogy minket választottál.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Probléma esetén vedd fel a kapcsolatot az ügyfélszolgálatunkkal: ugysemvalaszolunk@pizzavilag.test
                    </p>
                </Alert>
                <Alert show={this.state.showFail} variant="danger" >
                    <p>
                        Kérlek tölts ki minden kötelező mezőt a rendelés leadásához.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.handleAlert("showFail", false)} variant="outline-danger">
                            Bezárás
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
                        Rendelés megerősítése
                    </p>
                </div>
            </div>

        );
    }

}

export default Order;