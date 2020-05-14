
import React from 'react';
import './ShoppingCart.css';

const ShhoppingCart = ({onRouteChange, onSumPriceChange, shoppingCart, deleteFromCart}) =>
{
    let sumPrice = 0;
    let id=0;
    if(!shoppingCart.length)
    {
        return (<div className="center">Az ön kosara üres.</div>);
    }
    else
    {
        return(
            <main className="mw6 center" style={{overflowY: 'auto', height:'600px'}}> Kosár tartalma:
                {
                    shoppingCart.map((pizza, i) =>
                    {
                        sumPrice+=pizza.price;
                        pizza.id=id;
                        return(
                            <article className="shoppingCartList bg-light-yellow" key={id++}
                                onClick={()=>
                                {
                                    sumPrice-=pizza.price;
                                    deleteFromCart(pizza);
                                }}>
                                <div className="delete flex justify-center tc bg-black pointer">Törlés a kosárból</div>
                                <div className="dt w-100 bb b--black-10 pb2 mt2 dim pointer">
                                <div className="dtc w3">
                                    <img src={pizza.imageurl} className="db w-100" alt={pizza.name}/>
                                </div>
                                <div className="dtc v-top pl2">
                                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{pizza.name}</h1>
                                    <p className="f6 fw4 mt2 mb0 black-60">{pizza.size +" cm"}</p>
                                    <dl className="mt2 f6">
                                    <dt className="clip">Ár</dt>
                                    <dd className="ml0 b">{pizza.price+" Ft"}</dd>
                                    </dl>
                                </div>
                                </div>
                            </article>
                        );
                    })
                    
                }
                <div className="b red">Végösszeg: {sumPrice} Ft</div>
                <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0" 
                    style={{background: "#c4954f"}}
                    onClick = {() => {onSumPriceChange(sumPrice); onRouteChange('order');}}>
                        Megrendelem
                </p>
            </main>
        );
    }
    
}

export default ShhoppingCart;