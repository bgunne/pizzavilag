import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import CardList from '../../Components/CardList/CardList';
import SearchBox from '../../Components/SearchBox/SearchBox';
import SizeBox from '../../Components/SizeBox/SizeBox';
import Scroll from '../../Components/Scroll/Scroll';
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart';
import Order from '../Order/Order';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Orders from '../Orders/Orders';
import Admin from '../Admin/Admin';
import { requestPizzas, setSearchField, filterPizzas, addToCart, deleteFromCart, emptyCart, sumPriceChange, sizeChange, loadUser, updateUser, signOut, } from '../../_actions/app.js';
import { connect } from 'react-redux';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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
    if (!this.props.pizzas.length) {
      await this.props.onRequestPizzas();
      this.props.filterPizzas(this.props.pizzas, this.props.searchField);
    }
  }
  onAddToCart = (pizza) => {
    this.props.addToCart(pizza, this.props.shoppingCart);
  }
  onDeleteFromCart = (item) => {
    this.props.deleteFromCart(item, this.props.shoppingCart);
  }
  componentDidMount() {
    this.loadPizzas();
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchField, pizzas} = this.props;
    if (searchField !== prevProps.searchField) {
      this.props.filterPizzas(pizzas, searchField);
    }
  }
  render() {
    if (this.props.isPending)
      return (
        <div className="appBody" style={{ textAlign: "center" }}>
          <h1>Kínálat betöltése...</h1>
          <i className="gg-spinner-alt" style={{ margin: "auto" }}></i>
        </div>
      );
    return (
      <Router history={history}>
        <div className="tc appBody">
          <Navigation isSignedIn={this.props.isSignedIn} isAdmin={this.props.isAdmin} user={this.props.user} signOut={this.props.signOut} />
          <Switch>
            <Route exact path="/">
              <div>
                <div className="flex justify-center">
                  <SearchBox searchChange={this.props.onSearchChange} />
                  <SizeBox sizeChange={this.props.sizeChange} />
                </div>
                <Scroll>
                  <CardList pizzas={this.props.filteredPizzas} priceMultiplier={this.props.priceMultiplier} size={this.props.size} addToCart={this.onAddToCart} />
                  <ShoppingCart onSumPriceChange={this.props.sumPriceChange} shoppingCart={this.props.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
                </Scroll>
              </div>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/order">
              <Order onEmptyCart={this.props.emptyCart} sumPrice={this.props.sumPrice} shoppingCart={this.props.shoppingCart} user={this.props.user} updateUser={this.props.updateUser} />
            </Route>
            <Route path="/signin">
              <Signin loadUser={this.props.loadUser} history={history}/>
            </Route>
            <Route path="/register">
              <Register isOrder={false} loadUser={this.props.loadUser} history={history} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
