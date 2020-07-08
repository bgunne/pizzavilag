import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Api from '../../api/Api.js';
const mapStateToProps = state => {
	return {
		user: state.manageUser.user
	}
}
class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
			updated: false
		}
	}
	async requestOrders() {
		const orders = await (await Api.getOrders()).json();
		this.setState({ orders });
	}
	async changeOrder(id, statusCode) {
		await Api.changeOrder(id, statusCode);
		this.setState({updated: true});
	}
	async deleteOrder(id) {
		await Api.deleteOrder(id);
		this.setState({updated: true});
	}
	componentDidMount() {
		this.requestOrders();
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.state.updated !== prevState.updated && this.state.updated===true) {
			this.setState({updated: false});
			this.requestOrders();
		}
	}
	render() {
		const { orders } = this.state;
		return (
			<div className="w-80 flex items-center center">
				<article className="pa2 w-100">
					<h1 className="f4 bold left tl mw6"><FormattedMessage
						id="orders.orders" /></h1>
					<ul className="list pl0 ml0 center ba b--black br ">
						{
							orders.map((order, i) => {
								let user = order.user.split("\n");
								let pizzaList = order.pizzas.split("\n");
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
												pizzaList.map((pizza, i) => {
													return (
														<p className="w-100 center mt-auto mb-auto pt2" key={i}>{pizza}</p>
													)
												})
											}
										</div>
										<div className="ma-auto flex tc items-center center" >
											<p className="w-100 center mt-auto mb-auto fw6"><FormattedMessage
												id="orders.finalPrice" />: {order.price} Ft</p>
										</div>
										<div className="self-end pa1 h-auto" >
											<p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-gold"
												onClick={() => this.changeOrder(order.id, "#FFFF66")}
											>
												<FormattedMessage
													id="orders.confirm" />
											</p>
											<p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green"
												onClick={() => this.changeOrder(order.id, "#9ACD32")}
											>
												<FormattedMessage
													id="orders.sent" />
											</p>
											<p className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red"
												onClick={() => this.deleteOrder(order.id)}
											>
												<FormattedMessage
													id="orders.delete" />
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
export default connect(mapStateToProps)(Orders);
