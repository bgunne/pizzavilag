import React from 'react';
import Card from '../Card/Card';
const CardList = ({ pizzaList, priceMultiplier, size, addToCart }) => {
	return (
		<div className="w-90" style={{ overflowY: 'auto', height: 'auto' }}>
			{
				pizzaList.map((pizza) => {
					return (
						<Card
							key={pizza.id}
							pizza={pizza}
							priceMultiplier={priceMultiplier}
							size={size}
							addToCart={addToCart}
						/>
					);
				})
			}
		</div>
	);
}
export default CardList;