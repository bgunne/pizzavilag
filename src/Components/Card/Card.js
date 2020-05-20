import React from 'react';
import './Card.css';
const Card = ({pizza, priceMultiplier, size, addToCart}) =>
{
    return(
        <article className="cardBox dib br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw5 mh-auto mv2 bg-light-yellow">
            
            <img src={pizza.imageurl} className="db w-100 br2 br--top" alt="Pizza" style={{objectFit: "cover", height: "130px"}}/>
            
            <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                <div className="dtc">
                    <h1 className="f5 f4-ns mv0 pizzaName">{pizza.name}</h1>
                </div>
                </div>
                <p className="f6 lh-copy measure mt2 mid-gray topping">
                {pizza.topping}
                </p>
                <div className="dt w-100 ma0">
                    <h2 className="f5 mv0">{Math.round(pizza.price*priceMultiplier)} HUF</h2>
                </div>
                <p className="f6 lh-copy measure mt2 mid-gray pa0 ma0">
                {size} cm
                </p>
                <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0" 
                    style={{background: "#c4954f"}}
                    onClick={()=>addToCart(
                        {
                            id: pizza.id,
                            name: pizza.name,
                            price: Math.round(pizza.price*priceMultiplier),
                            size: size,
                            imageurl: pizza.imageurl
                        })}>Kosárba</p>
            </div>
        </article>
    );
}

export default Card;