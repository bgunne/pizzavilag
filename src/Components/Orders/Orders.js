import React, { Component } from 'react';

class Orders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            updated: false
        }
    }

    loadOrders = () => {
        fetch('https://shielded-coast-80926.herokuapp.com/orders',
            {
                method: 'get',
            })
            .then(response => response.json())
            .then(orders => {
                this.setState({ orders })
            })
    }

    changeStatus = (id, statusCode) => {
        fetch('https://shielded-coast-80926.herokuapp.com/orders',
            {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify
                    (
                        {
                            id: id,
                            statusCode: statusCode
                        }
                    )
            })
            .then(response => response.json())
            .then(this.setState({updated: true}))

    }

    deleteOrder = (id) => {
        fetch('https://shielded-coast-80926.herokuapp.com/orders',
            {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify
                    (
                        {
                            id: id
                        }
                    )
            })
            .then(response => response.json())
            .then(this.setState({updated: true}))

        
    }

    componentDidMount() {
        this.loadOrders();
    }

    componentDidUpdate(prevProps, prevState) {
        const updated = this.state.updated;
        
        if (updated !== prevState.updated) {
            if (updated) {
                this.loadOrders();
            }
            this.setState({ updated: false });
        }

    }

    render() {
        const { orders } = this.state;

        return (
            <div className="w-80 flex items-center center">
                <article className="pa2 w-100">
                    <h1 className="f4 bold left tl mw6">Rendelések</h1>
                    <ul className="list pl0 ml0 center ba b--black br ">
                        {

                            orders.map((order, i) => {
                                let user = order.user.split("\n");
                                let pizzas = order.pizzas.split("\n");
                                return (
                                    <li className="ph3 pv3 bb b--black tc items-center" style={{ boxSizing: "content-box", backgroundColor: `${order.status}` }} key={order.id}>
                                        <div className="ma-auto">
                                            <div className="ma-auto flex tc items-center center bb b--light-yellow" >
                                                <p className="w-100 center mt-auto mb-auto">{user[0]}</p>
                                            </div>
                                            <div className="ma-auto flex tc items-center center bb b--light-yellow" >
                                                <p className="w-100 center mt-auto mb-auto">{user[1]}</p>
                                            </div>
                                        </div>
                                        <div className="ma-auto">
                                            <div className="ma-auto flex tc items-center center bb b--light-yellow" >
                                                <p className="w-100 center mt-auto mb-auto">{user[2]}</p>
                                            </div>
                                            <div className="ma-auto flex tc items-center center bb b--light-yellow" >
                                                <p className="w-100 center mt-auto mb-auto">{user[3]}</p>
                                            </div>
                                            <div className="ma-auto flex tc items-center center bb b--light-yellow" >
                                                <p className="w-100 center mt-auto mb-auto">{user[4]}</p>
                                            </div>
                                        </div>

                                        <div className="ma-auto h-auto bb b--light-yellow">
                                            {
                                                pizzas.map((pizza, i) => {
                                                    return (
                                                        <p className="w-100 center mt-auto mb-auto pt2" key={i}>{pizza}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="ma-auto flex tc items-center center" >
                                            <p className="w-100 center mt-auto mb-auto fw6">Végösszeg: {order.price} Ft</p>
                                        </div>
                                        <div className="self-end pa1 h-auto" >
                                            <p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-gold"
                                                onClick={() => this.changeStatus(order.id, "#FFFF66")}
                                            >
                                                Rendelés visszaigazolása
                                </p>
                                            <p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green"
                                                onClick={() => this.changeStatus(order.id, "#9ACD32")}
                                            >
                                                Rendelés eküldve
                                </p>
                                            <p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red"
                                                onClick={() => this.deleteOrder(order.id)}
                                            >
                                                Rendelés törlése
                                </p>
                                        </div>
                                    </li>
                                )

                            })
                        }
                    </ul>
                </article>


            </div>
        )
    }


}

export default Orders;