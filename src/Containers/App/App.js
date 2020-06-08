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
import { requestPizzas, setSearchField, filterPizzas, addToCart, deleteFromCart, emptyCart, sumPriceChange, sizeChange, loadUser, updateUser, signIn, signOut, admin } from '../../_actions/app.js';
import { connect } from 'react-redux';
import './App.css';
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
    isSignedIn: state.manageUser.isSignedIn
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
    signIn: () => signIn(dispatch),
    signOut: () => signOut(dispatch),
    admin: () => admin(dispatch)
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      route: 'home',
    }
  }
  loadPizzas = async () => {
    if (!this.props.pizzas.length) {
      await this.props.onRequestPizzas();
      this.props.filterPizzas(this.props.pizzas, this.props.searchField);
    }
  }
  onRouteChange = (route) => {
    if (route === "signedin") {
      this.props.signIn();
      route = "home";
    }
    else if (route === "signout") {
      this.props.signOut();
      route = "home";
    }
    else if (route === "admin") {
      this.props.signIn();
      this.props.admin();
    }
    this.setState({ route: route });
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
    const { route } = this.state;
    const { searchField, pizzas } = this.props;
    if (searchField !== prevProps.searchField) {
      this.props.filterPizzas(pizzas, searchField);
    }
    else if (route !== prevState.route && route === "home") {
      this.props.filterPizzas(pizzas, '');
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
      <div className="tc appBody">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.props.isSignedIn} isAdmin={this.props.isAdmin} user={this.props.user} />
        {
          this.state.route === "home"
            ?
            <div>
              <div className="flex justify-center">
                <SearchBox searchChange={this.props.onSearchChange} />
                <SizeBox sizeChange={this.props.sizeChange} />
              </div>
              <Scroll>
                <CardList pizzas={this.props.filteredPizzas} priceMultiplier={this.props.priceMultiplier} size={this.props.size} addToCart={this.onAddToCart} />
                <ShoppingCart onRouteChange={this.onRouteChange} onSumPriceChange={this.props.sumPriceChange} shoppingCart={this.props.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
              </Scroll>
            </div>
            :
            (
              this.state.route === "admin"
                ?
                <Admin />
                :
                (
                  this.state.route === "orders"
                    ?
                    <Orders />
                    :
                    (
                      this.state.route === "order"
                        ?
                        <Order onRouteChange={this.onRouteChange} onEmptyCart={this.props.emptyCart} sumPrice={this.props.sumPrice} shoppingCart={this.props.shoppingCart} user={this.props.user} updateUser={this.props.updateUser} />
                        :
                        (
                          this.state.route === "signin"
                            ? <Signin loadUser={this.props.loadUser} onRouteChange={this.onRouteChange} />
                            : <Register isOrder={false} loadUser={this.props.loadUser} onRouteChange={this.onRouteChange} />
                        )
                    )
                )
            )
        }
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
