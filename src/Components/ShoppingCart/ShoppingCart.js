
import React from 'react';
import './ShoppingCart.css';

const ShhoppingCart = ({onRouteChange, onSumPriceChange, shoppingCart, deleteFromCart}) =>
{
    let sumPrice = 0;
    let id=0;
    if(!shoppingCart.length)
    {
        return (<div className="center"><i className="gg-shopping-cart dib"></i>Az ön kosara üres.</div>);
    }
    else
    {
        return(
            <main className="center" style={{overflowY: 'auto', height:'600px', maxWidth: "200px", margin: "auto"}}><i className="gg-shopping-cart dib"></i> Kosár tartalma:
                {
                    shoppingCart.map((pizza) =>
                    {
                        sumPrice+=pizza.price;
                        pizza.id=id;
                        return(
                            <article className="shoppingCartList bg-light-yellow" key={id++} style={{boxSizing: "content-box"}}
                                onClick={()=>
                                {
                                    sumPrice-=pizza.price;
                                    deleteFromCart(pizza);
                                }}>
                                <div className="bb b--black-10 pb2 mt2 pointer mh0">
                                    <div className="ma0">
                                        <div className="db mh-auto center" style={{width: "100%", height: "100px", backgroundImage: `url(${pizza.imageurl})`, backgroundSize: "cover"}}>
                                            
                                        </div>
                                        <div className="db v-top pl2 tc center mh-auto">
                                            <h1 className="f6 f5-ns fw6 lh-title black mv0">{pizza.name}</h1>
                                            <p className="f6 fw4 mt2 mb0 black-60">{pizza.size +" cm"}</p>
                                            <dl className="mt2 f6">
                                            <dt className="clip">Ár</dt>
                                            <dd className="ml0 b">{pizza.price+" Ft"}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="flex justify-center"><i className="gg-trash"></i></div>
                                    
                                </div>
                                
                            </article>
                        );
                    })
                    
                }
                <div className="b red">Végösszeg: {sumPrice} Ft</div>
                <p className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0" 
                    style={{background: "#c4954f"}}
                    onClick = {() => {onSumPriceChange(sumPrice); onRouteChange('order');}}>
                        Rendelés
                </p>
            </main>
        );
    }
    
}

export default ShhoppingCart;