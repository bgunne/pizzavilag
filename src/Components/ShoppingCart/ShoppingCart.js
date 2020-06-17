import React from 'react';
import './ShoppingCart.css';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
const ShhoppingCart = ({ onSumPriceChange, shoppingCart, deleteFromCart }) => {
    let sumPrice = 0;
    let id = 0;
    if (!shoppingCart.length) {
        return (<div className="center"><i className="gg-shopping-cart dib" />
            <FormattedMessage
                id="shoppingcart.cartEmpty" />
        </div>);
    }
    else {
        return (
            <main className="center mt0" style={{ overflowY: 'auto', height: 'auto', maxWidth: "200px" }}><i className="gg-shopping-cart dib"></i>
                <FormattedMessage
                    id="shoppingcart.cart" />:
                {
                    shoppingCart.map((pizza) => {
                        sumPrice += pizza.price;
                        pizza.id = id;
                        return (
                            <article className="shoppingCartList bg-light-yellow" key={id++} style={{ boxSizing: "content-box" }}
                                onClick={() => {
                                    sumPrice -= pizza.price;
                                    deleteFromCart(pizza);
                                }}>
                                <div className="bb b--black-10 pb2 mt2 pointer mh0">
                                    <div className="ma0">
                                        <div className="db mh-auto center" style={{ width: "100%", height: "100px", backgroundImage: `url(${pizza.imageurl})`, backgroundSize: "cover" }}>
                                        </div>
                                        <div className="db v-top pl2 tc center mh-auto">
                                            <h1 className="f6 f5-ns fw6 lh-title black mv0">{pizza.name}</h1>
                                            <p className="f6 fw4 mt2 mb0 black-60">{pizza.size + " cm"}</p>
                                            <dl className="mt2 f6">
                                                <dt className="clip">
                                                    <FormattedMessage
                                                        id="shoppingcart.price" />
                                                </dt>
                                                <dd className="ml0 b">{pizza.price + " Ft"}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="flex justify-center"><i className="gg-trash"></i></div>
                                </div>
                            </article>
                        );
                    })
                }
                <div className="b red">
                    <FormattedMessage
                        id="shoppingcart.finalPrice" />: {sumPrice} Ft
                </div>
                <NavLink to="/pizzavilag/order" className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0"
                    style={{ background: "#c4954f", textDecoration: "none", color: "white" }}
                    onClick={() => { onSumPriceChange(sumPrice); }}>
                    <FormattedMessage
                        id="shoppingcart.order" />
                </NavLink>
            </main>
        );
    }
}
export default ShhoppingCart;