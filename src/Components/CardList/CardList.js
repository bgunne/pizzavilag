import React from 'react';
import Card from '../Card/Card';

const CardList = ({pizzas, priceMultiplier, size, addToCart}) =>  //propsban megkapjuk a robotokat
{
    return(
        <div className="w-90" style={{overflowY: 'auto', height:'600px'}}>
            {
                pizzas.map((pizza,i) =>
                {
                return(
                        <Card
                            key={pizza.id}
                            pizza={pizza}
                            priceMultiplier={priceMultiplier}
                            size={size}
                            addToCart = {addToCart}
                        />
                    );
                })
            }
        </div>

    );
}

export default CardList;