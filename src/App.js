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

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      route: 'home',
      isSignedIn: true,
      isAdmin: true,
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
      pizzas: [],
      filteredPizzas: [],
      searchField: '',
      prizeMultiplier: 1,
      size: 32,
      sumPrice: 0,
      shoppingCart: [],
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


  async loadPizzas() {
    if (!this.state.pizzas.length) {
      const response = await fetch('https://shielded-coast-80926.herokuapp.com/',
        {
          method: 'get',
        });
      const pizzas = await response.json();
      this.setState({ pizzas })
      this.filterPizzas();
    }
  }


  onRouteChange = (route) => {
    if (route === "signedin") {
      this.setState({ isSignedIn: true, searchField: '' });
      route = "home";
    }
    else if (route === "signout") {
      this.setState({ isSignedIn: false, isAdmin: false, user: [] });
      route = "home";
    }
    else if (route === "admin") {
      this.setState({ isSignedIn: true, isAdmin: true });

    }
    this.setState({ route: route, searchField: '' });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  onSizeChange = (size) => {
    this.setState({ size: size });
    switch (size) {
      case 32: this.setState({ prizeMultiplier: 1 }); break;
      case 45: this.setState({ prizeMultiplier: 1.9 }); break;
      case 55: this.setState({ prizeMultiplier: 2.75 }); break;
      default: console.log("ERROR setting size"); break;

    }
  }

  onAddToCart = (pizza) => {
    this.setState(prevState => (
      {
        shoppingCart: [...prevState.shoppingCart, pizza]
      }))
  }

  onDeleteFromCart = (item) => {
    const newCart = this.state.shoppingCart;
    newCart.forEach(function (pizza, index) {
      if (pizza.id === item.id) {
        newCart.splice(index, 1);
      }
    });


    this.setState({ shoppingCart: newCart });
  }

  onEmptyCart = () => {
    this.setState({ shoppingCart: [] });
  }

  onSumPriceChange = (sumPrice) => {
    this.setState({ sumPrice });
  }

  filterPizzas = () => {
    if (this.state.pizzas.length && this.state.searchField.length) {
      const filteredPizzas = this.state.pizzas.filter(
        pizzas => {
          return pizzas.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
      this.setState({ filteredPizzas });
    }
    else if (this.state.pizzas.length) {
      this.setState({ filteredPizzas: this.state.pizzas })
    }
    else {
      console.error("Nem sikerült betölteni a pizzákat.");
    }
  }

  componentDidMount() {
    if (!this.state.pizzas.length) {
      this.loadPizzas();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchField, route } = this.state;

    if (searchField !== prevState.searchField || (route !== prevState.route && route === "home")) {
      this.filterPizzas();
    }
  }

  updateUser(user) {
    this.setState({ user })
  }


  render() {
    const { filteredPizzas } = this.state;


    /*return( 
      <div className="appBody" style={{textAlign: "center"}}>
        <h1>Kínálat betöltése...</h1>
        <i className="gg-spinner-alt" style={{margin: "auto"}}></i>
      </div>
    );*/


    return (
      <div className="tc appBody">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} isAdmin={this.state.isAdmin} user={this.state.user} />
        {
          this.state.route === "home"
            ?
            <div>
              <div className="flex justify-center">
                <SearchBox searchChange={this.onSearchChange} />
                <SizeBox sizeChange={this.onSizeChange} />
              </div>
              <Scroll>
                <CardList pizzas={filteredPizzas} priceMultiplier={this.state.prizeMultiplier} size={this.state.size} addToCart={this.onAddToCart} />
                <ShoppingCart onRouteChange={this.onRouteChange} onSumPriceChange={this.onSumPriceChange} shoppingCart={this.state.shoppingCart} deleteFromCart={this.onDeleteFromCart} />
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
                        <Order onRouteChange={this.onRouteChange} onEmptyCart={this.onEmptyCart} sumPrice={this.state.sumPrice} shoppingCart={this.state.shoppingCart} user={this.state.user} updateUser={this.updateUser} />
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

export default App;
