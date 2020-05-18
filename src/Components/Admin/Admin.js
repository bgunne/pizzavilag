import React, { Component } from 'react';

import PizzaEditor from '../PizzaEditor/PizzaEditor';

class Admin extends Component {
    
    initialState = {
		pizzas: [],
		pizzaEdit: {
			id: '',
			name: '',
			topping: '',
			price: '',
			imageurl: ''
		},
		showEdit: false,
		editId: '',
		showUpload: false,
		selectedFile: null
	};

	constructor(props) {
		super(props);
		this.state = this.initialState;
	}

	loadPizzas = () => {
		fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'get'
		})
			.then((response) => response.json())
			.then((pizzas) => {
				this.setState({ pizzas });
			});
	};

	deletePizza = (id) => {
		fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: id
			})
		}).then((response) => response.json());

		setTimeout(() => {
			this.loadPizzas();
		}, 100);
	};

	changePizza(pizza) {
		this.setState({ pizzaEdit: pizza, showEdit: true, editId: pizza.id });
	}

	newPizza() {
		this.setState({ showUpload: true, pizzaEdit: [] });
	}

	onFormChange = (event) => {
		this.setState(Object.assign(this.state.pizzaEdit, { [event.target.id]: event.target.value }));
	};

	updatePizza() {
		fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: this.state.pizzaEdit.id,
				name: this.state.pizzaEdit.name,
				topping: this.state.pizzaEdit.topping,
				price: this.state.pizzaEdit.price,
				imageurl: this.state.pizzaEdit.imageurl
			})
		}).then((response) => response.json());

		setTimeout(() => {
			this.loadPizzas();
		}, 1000);
		this.setState({ showEdit: false });
	}

	uploadPizza() {
		fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: this.state.pizzaEdit.name,
				topping: this.state.pizzaEdit.topping,
				price: this.state.pizzaEdit.price,
				imageurl: this.state.pizzaEdit.imageurl
			})
		})
			.then((response) => response.json())
			.then(
				setTimeout(() => {
					this.setState(this.initialState);
				}, 100)
			)
			.then(this.loadPizzas);
	}

	addBar() {
		if (this.state.showUpload === true) {
			return (
				<div className="ma-auto flex tc items-center">
					<PizzaEditor
						onFileInputChangeHandler={this.onFileInputChangeHandler}
						pizza={[]}
						onFormChange={this.onFormChange}
					/>
					<div
						className="self-end pa1 h-auto"
						style={{ height: '100px', width: '16%', marginLeft: '0', marginRight: '0' }}
					>
						<p
							className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green mh1"
							onClick={() => {
								/*FILEUPLOAD...
                                        this.onFileUploadHandler();
                                        setTimeout(() => {
                                            this.uploadPizza()
                                        }, 100)*/
								this.uploadPizza();
							}}
						>
							Pizza Feltöltése
						</p>
						<p
							className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red mh1"
							onClick={() => this.setState({ showUpload: false })}
						>
							Mégsem
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<p
					className="f6 grow no-underline br-pill ph3 pv2 dib white bg-black pointer ba bw0 mt-auto mb-auto center"
					style={{ backgroundColor: '#c4954f' }}
					onClick={() => this.newPizza()}
				>
					Hozzáadás
				</p>
			);
		}
	}

	onFileInputChangeHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0],
			loaded: 0
		});
	};

	onFileUploadHandler = () => {
		const data = new FormData();
		data.append('file', this.state.selectedFile);

		if (this.state.selectedFile) {
			fetch('https://shielded-coast-80926.herokuapp.com/uploadimage', {
				method: 'POST',
				body: data
			}).then((response) => {
				response.json().then((body) => {
					console.log(body);
					this.setState(
						Object.assign(this.state.pizzaEdit, {
							imageurl: `https://shielded-coast-80926.herokuapp.com/public/images/${body.filename}`
						})
					);
				});
			});
		}
	};

	componentDidMount() {
		const { pizzas } = this.state;
		if (!pizzas.length) {
			this.loadPizzas();
		}
	}

	render() {
		const { pizzas } = this.state;

		return (
			<div className="w-80 flex items-center center">
				<article className="pa2 w-100">
					<div className="flex justify-between items-center pa2">
						<h1 className="f4 bold left tl mw6 mt-auto mb-auto">Pizzák</h1>
					</div>

					<ul className="list pl0 ml0 center ba b--light-silver br ">
						<li
							className="ph3 pv3 bb b--light-silver flex tc items-center bg-light-yellow"
							style={{ boxSizing: 'content-box' }}
							key="0"
						>
							{this.addBar()}
						</li>
						{pizzas.map((pizza, i) => {
							if (this.state.editId === pizza.id && this.state.showEdit) {
								return (
									<li
										className="ph3 pv3 bb b--light-silver flex tc items-center bg-light-yellow"
										style={{ boxSizing: 'content-box' }}
										key={pizza.id}
									>
										<PizzaEditor
											onFileInputChangeHandler={this.onFileInputChangeHandler}
											pizza={pizza}
											onFormChange={this.onFormChange}
										/>
										<div
											className="w-10 pa1 h-auto flex tc items-center center"
											style={{ height: '100px', width: '16%', marginLeft: '0', marginRight: '0' }}
										>
											<p
												className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-green mt-auto mb-auto"
												onClick={() => {
													/*FILEUPLOAD...
                                                        this.onFileUploadHandler();
                                                        setTimeout(() => {
                                                            this.updatePizza()
                                                        }, 100)*/
													this.updatePizza();
												}}
											>
												Módosítás mentése
											</p>
										</div>
									</li>
								);
							} else {
								return (
									<li
										className="ph3 pv3 bb b--light-silver flex tc items-center"
										style={{ boxSizing: 'content-box', backgroundColor: '#c4954f' }}
										key={pizza.id}
									>
										<div
											className=" ma-auto flex tc items-center center"
											style={{ height: '100px', width: '16%' }}
										>
											<p className="w-100 center mt-auto mb-auto">{pizza.name}</p>
										</div>
										<div
											className=" ma-auto flex tc items-center center"
											style={{ height: '100px', width: '16%' }}
										>
											<p className="w-100 center mt-auto mb-auto">{pizza.topping}</p>
										</div>
										<div
											className=" ma-auto flex tc items-center center"
											style={{ height: '100px', width: '16%' }}
										>
											<p className="w-100 center mt-auto mb-auto">{pizza.price} Ft</p>
										</div>
										<div
											className=" ma-auto flex tc items-center center"
											style={{ height: '100px', width: '16%' }}
										>
											<p className="w-100 center mt-auto mb-auto">
												<img
													src={pizza.imageurl}
													alt={pizza.imageurl}
													className="db br2 br--top"
													style={{ objectFit: 'cover', width: '200px', height: '100px' }}
												/>
											</p>
										</div>
										<div className="self-end pa1 h-auto" style={{ height: '100px', width: '16%' }}>
											<p
												className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-gold"
												onClick={() => this.changePizza(pizza)}
											>
												Módosítás
											</p>
											<p
												className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red"
												onClick={() => this.deletePizza(pizza.id)}
											>
												Törlés
											</p>
										</div>
									</li>
								);
							}
						})}
					</ul>
				</article>
			</div>
		);
	}
}

export default Admin;
