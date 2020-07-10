import React, { Component, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import SearchBox from './components/common/SearchBox/SearchBox';
import SizeBox from './components/common/SizeBox/SizeBox';
import Scroll from './components/common/Scroll/Scroll';
import Footer from './components/Footer/Footer';
import { PizzaActions, OrderActions, UserActions } from './redux/actions/app.js';
import { connect } from 'react-redux';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Path } from './utils/Path';
import { Loading } from './components/common/Loading/Loading';
import Api from './api/Api';

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
		pizzaList: state.managePizzaList.pizzaList,
		isPending: state.managePizzaList.isPending,
		shoppingCart: state.manageCart.shoppingCart,
		sumPrice: state.manageCart.sumPrice,
		size: state.manageSize.size,
		priceMultiplier: state.manageSize.priceMultiplier,
		user: state.manageUser.user,
		isAdmin: state.manageUser.isAdmin,
		isSignedIn: state.manageUser.isSignedIn,
	}
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchField: '',
			filteredPizzaList: []
		}
	}
	loadPizzaList = async () => {
		try {
			const pizzaList = await (await Api.getPizzaList()).json();
			this.props.dispatch(PizzaActions.updatePizzaList(pizzaList));
		}
		catch (error) {
			console.error('error', error);
		}
		this.filterPizzaList();
	}
	filterPizzaList = () => {
		const { pizzaList } = this.props;
		const { searchField } = this.state;
		if (pizzaList.length && searchField.length) {
			const filteredPizzaList = pizzaList.filter(
				pizzaList => {
					return pizzaList.name.toLowerCase().includes(searchField.toLowerCase());
				});
			this.setState({ filteredPizzaList: filteredPizzaList });
		}
		else if (pizzaList.length) {
			this.setState({ filteredPizzaList: pizzaList })
		}
		else {
			console.error("Nem sikerült betölteni a pizzákat.");
		}
	}
	onAddToCart = (pizza) => {
		this.props.dispatch(OrderActions.addToCart(pizza, this.props.shoppingCart));
	}
	onDeleteFromCart = (item) => {
		this.props.dispatch(OrderActions.deleteFromCart(item, this.props.shoppingCart));
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}
	onSumPriceChange = (sumPrice) => {
		this.props.dispatch(OrderActions.sumPriceChange(sumPrice));
	}
	onSizeChange = (size) => {
		this.props.dispatch(OrderActions.sizeChange(size));
	}
	onLoadUser = (data) => {
		this.props.dispatch(UserActions.loadUser(data));
	}
	onUpdateUser = (user) => {
		this.props.dispatch(UserActions.updateUser(user));
	}
	onSignOut = () => {
		this.props.dispatch(UserActions.signOut());
	}
	emptySearchField() {
		if (this.state.searchField.length && history.location.pathname !== Path.root) {
			this.setState({ searchField: '' });
		}
	}
	componentDidMount() {
		this.emptySearchField();
		this.loadPizzaList();
	}
	componentDidUpdate(prevProps, prevState) {
		const { searchField } = this.state;
		const { user, pizzaList } = this.props;
		if (pizzaList !== prevProps.pizzaList && !pizzaList.length) {
			this.loadPizzaList();
		}
		if (searchField !== prevState.searchField && !this.props.isPending) {
			this.filterPizzaList();
		}
		if (user !== prevState.user) {
			this.emptySearchField();
		}
	}
	render() {
		return (
			<Router history={history}>
				<div className="tc appBody">
					<Navigation isSignedIn={this.props.isSignedIn} isAdmin={this.props.isAdmin} user={this.props.user} signOut={this.onSignOut} emptySearchField={() => this.emptySearchField()} />
					<Suspense fallback={<Loading />}>
						<Switch>
							<Route exact path={Path.root}
								render={(props) =>
									<>
										<div className="flex justify-center">
											<SearchBox {...props} searchChange={this.onSearchChange} />
											<SizeBox {...props} sizeChange={this.onSizeChange} />
										</div>
										<Scroll>
											<CardList {...props} pizzaList={this.state.filteredPizzaList} priceMultiplier={this.props.priceMultiplier} size={this.props.size} addToCart={this.onAddToCart} />
											<ShoppingCart {...props} onSumPriceChange={this.onSumPriceChange} shoppingCart={this.props.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
										</Scroll>
									</>
								} />
							<PrivateRoute path={Path.admin} render={(props) => <Admin {...props} loadPizzaList={this.loadPizzaList} />} />
							<PrivateRoute path={Path.orders} render={(props) => <Orders {...props} />} />
							<Route path={Path.order} render={(props) => <Order {...props} sumPrice={this.props.sumPrice} shoppingCart={this.props.shoppingCart} />} />
							<GuestRoute path={Path.signIn} render={(props) => <Signin {...props} loadUser={this.onLoadUser} history={history} />} />
							<GuestRoute path={Path.register} render={(props) => <Register {...props} isOrder={false} loadUser={this.onLoadUser} history={history} />} />
						</Switch>
					</Suspense>
					<Footer />
				</div>
			</Router >
		);
	}
}
export default connect(mapStateToProps)(App);