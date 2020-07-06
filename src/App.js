import React, { Component, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import SearchBox from './components/common/SearchBox/SearchBox';
import SizeBox from './components/common/SizeBox/SizeBox';
import Scroll from './components/common/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import { requestPizzas, setSearchField, emptySearchField, filterPizzas, addToCart, deleteFromCart, emptyCart, sumPriceChange, sizeChange, loadUser, updateUser, signOut, } from './redux/actions/app.js';
import { connect } from 'react-redux';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { FormattedMessage } from 'react-intl';
import { Path } from './utils/Path';

const CardList = React.lazy(() => import('./components/common/CardList/CardList'));
const ShoppingCart = React.lazy(() => import('./components/ShoppingCart/ShoppingCart'));
const Order = React.lazy(() => import('./pages/Order/Order'));
const Signin = React.lazy(() => import('./pages/Signin/Signin'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const Orders = React.lazy(() => import('./pages/Orders/Orders'));
const Admin = React.lazy(() => import('./pages/Admin/Admin'));
const GuestRoute = React.lazy(() => import('./components/Route/GuestRoute'));
const PrivateRoute = React.lazy(() => import('./components/Route/PrivateRoute'));

const history = createBrowserHistory();
const mapStateToProps = state => {
	return {
		pizzas: state.managePizzas.pizzas,
		isPending: state.managePizzas.isPending,
		searchField: state.searchPizzas.searchField,
		filteredPizzas: state.filterPizzas.filteredPizzas,
		shoppingCart: state.manageCart.shoppingCart,
		sumPrice: state.manageCart.sumPrice,
		size: state.manageSize.size,
		priceMultiplier: state.manageSize.priceMultiplier,
		user: state.manageUser.user,
		isAdmin: state.manageUser.isAdmin,
		isSignedIn: state.manageUser.isSignedIn,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onRequestPizzas: () => requestPizzas(dispatch),
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		emptySearchField: () => dispatch(emptySearchField()),
		filterPizzas: (pizzas, searchField) => filterPizzas(dispatch, pizzas, searchField),
		addToCart: (pizza, shoppingCart) => addToCart(dispatch, pizza, shoppingCart),
		deleteFromCart: (item, shoppingCart) => deleteFromCart(dispatch, item, shoppingCart),
		emptyCart: () => emptyCart(dispatch),
		sumPriceChange: (sumPrice) => sumPriceChange(dispatch, sumPrice),
		sizeChange: (size) => sizeChange(dispatch, size),
		loadUser: (data) => loadUser(dispatch, data),
		updateUser: (user) => updateUser(dispatch, user),
		signOut: () => signOut(dispatch)
	}
}
class App extends Component {
	loadPizzas = async () => {
		await this.props.onRequestPizzas();
		this.props.filterPizzas(this.props.pizzas, this.props.searchField);
	}
	onAddToCart = (pizza) => {
		this.props.addToCart(pizza, this.props.shoppingCart);
	}
	onDeleteFromCart = (item) => {
		this.props.deleteFromCart(item, this.props.shoppingCart);
	}
	componentDidMount() {
		if (this.props.searchField.length) {
			this.props.emptySearchField();
		}
		this.loadPizzas();
	}
	componentDidUpdate(prevProps, prevState) {
		const { searchField, pizzas } = this.props;
		if (searchField !== prevProps.searchField && !this.props.isPending) {
			this.props.filterPizzas(pizzas, searchField);
		}
	}
	render() {
		return (
			<Router history={history}>
				<div className="tc appBody">
					<Navigation isSignedIn={this.props.isSignedIn} isAdmin={this.props.isAdmin} user={this.props.user} signOut={this.props.signOut} emptySearchField={this.props.emptySearchField} />
					<Suspense fallback={
						<div className="appBody" style={{ textAlign: "center" }}>
							<h1>
								<FormattedMessage
									id="app.loading" />
							</h1>
							<i className="gg-spinner-alt" style={{ margin: "auto" }}></i>
							<p>
								<FormattedMessage
									id="app.loadingInfo" />
								<a href="https://github.com/bgunne/pizzavilag"><FormattedMessage id="app.loadingLink" /></a>
							</p>
						</div>
					}>
						<Switch>
							<Route exact path={Path.root}
								render={(props) =>
									<>
										<div className="flex justify-center">
											<SearchBox {...props} searchChange={this.props.onSearchChange} />
											<SizeBox {...props} sizeChange={this.props.sizeChange} />
										</div>
										<Scroll>
											<CardList {...props} pizzas={this.props.filteredPizzas} priceMultiplier={this.props.priceMultiplier} size={this.props.size} addToCart={this.onAddToCart} />
											<ShoppingCart {...props} onSumPriceChange={this.props.sumPriceChange} shoppingCart={this.props.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
										</Scroll>
									</>
								} />
							<PrivateRoute path={Path.admin} render={(props) => <Admin {...props} />} />
							<PrivateRoute path={Path.orders} render={(props) => <Orders {...props} />} />
							<Route path={Path.order} render={(props) => <Order {...props} onEmptyCart={this.props.emptyCart} sumPrice={this.props.sumPrice} shoppingCart={this.props.shoppingCart} user={this.props.user} updateUser={this.props.updateUser} />} />
							<GuestRoute path={Path.signIn} render={(props) => <Signin {...props} loadUser={this.props.loadUser} history={history} />} />
							<GuestRoute path={Path.register} render={(props) => <Register {...props} isOrder={false} loadUser={this.props.loadUser} history={history} />} />
						</Switch>
					</Suspense>
					<Footer />
				</div>
			</Router >
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);