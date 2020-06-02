import React, { Component } from 'react';

import Navigation from './Components/Navigation/Navigation';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import SizeBox from './Components/SizeBox/SizeBox';
import Scroll from './Components/Scroll/Scroll';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Order from './Components/Order/Order';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import { requestPizzas, setSearchField, filterPizzas, addToCart, deleteFromCart, emptyCart } from './actions.js';
import { connect } from 'react-redux';

import './App.css';

const mapStateToProps = state => {
  return {
    pizzas: state.requestPizzas.pizzas,
    isPending: state.requestPizzas.isPending,
    searchField: state.searchPizzas.searchField,
    filteredPizzas: state.filterPizzas.filteredPizzas,
    shoppingCart: state.manageCart.shoppingCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPizzas: () => requestPizzas(dispatch),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    filterPizzas: (pizzas, searchField) => filterPizzas(dispatch, pizzas, searchField),
    addToCart: (pizza, shoppingCart) => addToCart(dispatch, pizza, shoppingCart),
    deleteFromCart: (item, shoppingCart) => deleteFromCart(dispatch, item, shoppingCart),
    emptyCart: () => emptyCart(dispatch)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      route: 'home',
      isSignedIn: false,
      isAdmin: false,
      user:
      {
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
        zip: '',
        city: '',
        address: '',
        comment: '',
        role: '',
        joined: ''
      },
      prizeMultiplier: Number(process.env.REACT_APP_BASE_PRIZEMULTIPLIER),
      size: Number(process.env.REACT_APP_BASE_SIZE),
      sumPrice: 0,
      orders: []
    }
  }

  loadUser = (data) => {
    this.setState(
      {
        user:
        {
          id: data.id,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          phone: data.phone,
          zip: data.zip,
          city: data.city,
          address: data.address,
          comment: data.comment,
          role: data.role,
          joined: data.joined
        }
      }
    );

  }


  loadPizzas = async () => {
    if (!this.props.pizzas.length) {
      await this.props.onRequestPizzas();
      this.props.filterPizzas(this.props.pizzas, this.props.searchField);
    }
  }


  onRouteChange = (route) => {
    if (route === "signedin") {
      this.setState({ isSignedIn: true, });
      route = "home";
    }
    else if (route === "signout") {
      this.setState({ isSignedIn: false, isAdmin: false, user: [] });
      route = "home";
    }
    else if (route === "admin") {
      this.setState({ isSignedIn: true, isAdmin: true });
    }
    this.setState({ route: route });
  }

  onSizeChange = (size) => {
    this.setState({ size: size });
    switch (size) {
      case 32: this.setState({ prizeMultiplier: Number(process.env.REACT_APP_BASE_PRIZEMULTIPLIER) }); break;
      case 45: this.setState({ prizeMultiplier: Number(process.env.REACT_APP_MEDIUM_PRIZEMULTIPLIER) }); break;
      case 55: this.setState({ prizeMultiplier: Number(process.env.REACT_APP_LARGE_PRIZEMULTIPLIER) }); break;
      default: console.error("setting size failed"); break;
    }
  }

  onAddToCart = (pizza) => {
    this.props.addToCart(pizza, this.props.shoppingCart);
  }

  onDeleteFromCart = (item) => {
    this.props.deleteFromCart(item, this.props.shoppingCart);
  }

  onSumPriceChange = (sumPrice) => {
    this.setState({ sumPrice });
  }

  filterPizzas = () => {
    if (this.props.pizzas.length && this.props.searchField.length) {
      const filteredPizzas = this.props.pizzas.filter(
        pizzas => {
          return pizzas.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
      console.log(filteredPizzas);
      this.setState({ filteredPizzas });
    }
    else if (this.props.pizzas.length) {
      this.setState({ filteredPizzas: this.props.pizzas })
    }
    else {
      console.error("Nem sikerült betölteni a pizzákat.");
    }
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

  updateUser(user) {
    this.setState({ user })
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
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} isAdmin={this.state.isAdmin} user={this.state.user} />
        {
          this.state.route === "home"
            ?
            <div>
              <div className="flex justify-center">
                <SearchBox searchChange={this.props.onSearchChange} />
                <SizeBox sizeChange={this.onSizeChange} />
              </div>
              <Scroll>
                <CardList pizzas={this.props.filteredPizzas} priceMultiplier={this.state.prizeMultiplier} size={this.state.size} addToCart={this.onAddToCart} />
                <ShoppingCart onRouteChange={this.onRouteChange} onSumPriceChange={this.onSumPriceChange} shoppingCart={this.props.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
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
                        <Order onRouteChange={this.onRouteChange} onEmptyCart={this.props.emptyCart} sumPrice={this.state.sumPrice} shoppingCart={this.props.shoppingCart} user={this.state.user} updateUser={this.updateUser} />
                        :
                        (
                          this.state.route === "signin"
                            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                            : <Register isOrder={false} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
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
