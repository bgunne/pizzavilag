import React, { Component } from 'react';

import PizzaEditor from '../PizzaEditor/PizzaEditor';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
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
			deleteId: '',
			showUpload: false,
			selectedFile: null,
			modificationType: ''
		};
	}

	async loadPizzas() {
		const response = await fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'get'
		})
		const pizzas = await response.json();
		this.setState({ pizzas });
	};

	async deletePizza(id) {
		await fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: id
			})
		});

		this.loadPizzas();
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

	async updatePizza() {
		await fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: this.state.pizzaEdit.id,
				name: this.state.pizzaEdit.name,
				topping: this.state.pizzaEdit.topping,
				price: this.state.pizzaEdit.price,
				imageurl: this.state.pizzaEdit.imageurl
			})
		});
		this.setState({ showEdit: false });
		this.loadPizzas();
	}

	async uploadPizza() {
		await fetch('https://shielded-coast-80926.herokuapp.com/manage', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: this.state.pizzaEdit.name,
				topping: this.state.pizzaEdit.topping,
				price: this.state.pizzaEdit.price,
				imageurl: this.state.pizzaEdit.imageurl
			})
		});
		this.setState({ showUpload: false, pizzaEdit: [] });
		this.loadPizzas();
	}

	handleCloseAddForm() {
		this.setState({ showUpload: false })
	}

	handleModificationType(type) {
		this.setState({ modificationType: type });
	}

	handleDeleteId(id) {
		this.setState({ deleteId: id });
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
								/*TODO: FILEUPLOAD
                                        this.onFileUploadHandler();
                                        setTimeout(() => {
                                            this.uploadPizza()
                                        }, 100)*/
								this.handleModificationType("upload");
							}}
						>
							Pizza Feltöltése
						</p>
						<p
							className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red mh1"
							onClick={() => this.handleCloseAddForm()}
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

	async onFileUploadHandler() {
		const data = new FormData();
		data.append('file', this.state.selectedFile);

		if (this.state.selectedFile) {
			const response = await fetch('https://shielded-coast-80926.herokuapp.com/uploadimage', {
				method: 'POST',
				body: data
			});
			const body = await response.json();
			this.setState(
				Object.assign(this.state.pizzaEdit, {
					imageurl: `https://shielded-coast-80926.herokuapp.com/public/images/${body.filename}`
				})
			);
		}
	};

	componentDidMount() {
		this.loadPizzas();
	}

	componentDidUpdate(prevProps, prevState) {
		const { modificationType, deleteId } = this.state;

		if (modificationType !== prevState.modificationType) {

			if (modificationType === "update") {
				this.updatePizza();

			}
			else if (modificationType === "upload") {
				this.uploadPizza();
			}
			else if (modificationType === "delete") {
				this.deletePizza(deleteId);
			}

			this.setState({ modificationType: '' });
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
													//this.updatePizza();
													this.handleModificationType("update");
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
												onClick={() => {
													this.handleDeleteId(pizza.id);
													this.handleModificationType("delete");
												}
												}
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
