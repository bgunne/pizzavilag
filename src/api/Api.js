import { RestClient } from "./RestClient";
export default class Api {

	static async getPizzaList() {
		return RestClient.get('/');
	}

	static async deletePizza(id) {
		RestClient.delete('/manage', JSON.stringify({
			id: id
		}));
	}

	static async uploadPizza(name, topping, price, imageurl) {
		RestClient.post('/manage', JSON.stringify({
			name: name,
			topping: topping,
			price: price,
			imageurl: imageurl
		}));
	}

	static async updatePizza(id, name, topping, price, imageurl) {
		RestClient.put('/manage', JSON.stringify({
			id: id,
			name: name,
			topping: topping,
			price: price,
			imageurl: imageurl
		}));
	}

	static async getOrders() {
		return RestClient.get('/orders');
	}

	static async changeOrder(id, statusCode) {
		RestClient.put('/orders', JSON.stringify({
			id: id,
			statusCode: statusCode
		}));
	}

	static async deleteOrder(id) {
		RestClient.delete('/orders', JSON.stringify({
			id: id
		}));
	}

	static async order(user, pizzaList, price) {
		RestClient.post('/order', JSON.stringify
			(
				{
					user: user,
					pizzas: pizzaList,
					price: price
				}));
	}

	static async register(email, password, firstname, lastname, phone, zip, city, address, comment) {
		return RestClient.post('/register', JSON.stringify
			(
				{
					email: email,
					password: password,
					firstname: firstname,
					lastname: lastname,
					phone: phone,
					zip: zip,
					city: city,
					address: address,
					comment: comment,
					joined: new Date()
				}));
	}

	static async signIn(email, password) {
		return RestClient.post('/signin', JSON.stringify
			(
				{
					email: email,
					password: password
				}));
	}
	// TODO: add all api calls...
}
