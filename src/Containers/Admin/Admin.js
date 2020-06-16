import React, { Component } from 'react';
import PizzaEditor from '../../Components/PizzaEditor/PizzaEditor';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { requestPizzas, deletePizza, uploadPizza, updatePizza } from '../../_actions/app.js';
import { onPizzaEditFormChange, onFileInputChangeHandler, loadPizzaEdit, emptyPizzaEdit, setEditId, setDeleteId, setModificationType } from '../../_actions/admin.js';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
const mapStateToProps = state => {
	return {
		pizzas: state.managePizzas.pizzas,
		pizzaEdit: state.onPizzaEditFormChange.pizzaEdit,
		editId: state.manageEdit.editId,
		deleteId: state.manageEdit.deleteId,
		modificationType: state.manageEdit.modificationType
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		requestPizzas: () => requestPizzas(dispatch),
		deletePizza: (id) => deletePizza(dispatch, id),
		uploadPizza: (name, topping, price, imageurl) => uploadPizza(dispatch, name, topping, price, imageurl),
		updatePizza: (id, name, topping, price, imageurl) => updatePizza(dispatch, id, name, topping, price, imageurl),
		onPizzaEditFormChange: (data, targetId) => onPizzaEditFormChange(dispatch, data, targetId),
		onFileInputChangeHandler: (data) => onFileInputChangeHandler(dispatch, data),
		loadPizzaEdit: (pizza) => loadPizzaEdit(dispatch, pizza),
		emptyPizzaEdit: () => dispatch(emptyPizzaEdit()),
		setEditId: (id) => setEditId(dispatch, id),
		setDeleteId: (id) => setDeleteId(dispatch, id),
		setModificationType: (type) => setModificationType(dispatch, type)
	}
}
class Admin extends Component {
	constructor(props) {
		super(props);
		this.state =
		{
			showEdit: false,
			showUpload: false,
			showFail: false,
		};
	}
	changePizza(pizza) {
		this.props.loadPizzaEdit(pizza);
		this.props.setEditId(pizza.id);
		this.setState({ showEdit: true });
	}
	newPizza() {
		this.props.emptyPizzaEdit();
		this.setState({ showUpload: true });
	}
	onFormChange = (event) => {
		this.props.onPizzaEditFormChange(event.target.value, event.target.id);
	};
	updatePizza = async () => {
		if (!this.props.pizzaEdit.name || !this.props.pizzaEdit.topping || !this.props.pizzaEdit.price) {
			this.handleAlert("showFail", true);
		}
		else {
			await this.props.updatePizza(this.props.pizzaEdit.id, this.props.pizzaEdit.name, this.props.pizzaEdit.topping, this.props.pizzaEdit.price, this.props.pizzaEdit.imageurl);
			this.props.emptyPizzaEdit();
			this.setState({ showEdit: false });
		}
	}
	uploadPizza = async () => {
		if (!this.props.pizzaEdit.name || !this.props.pizzaEdit.topping || !this.props.pizzaEdit.price) {
			this.handleAlert("showFail", true);
		}
		else {
			await this.props.uploadPizza(this.props.pizzaEdit.name, this.props.pizzaEdit.topping, this.props.pizzaEdit.price, this.props.pizzaEdit.imageurl);
			this.props.emptyPizzaEdit();
			this.setState({ showUpload: false });
		}
	}
	handleCloseAddForm() {
		this.setState({ showUpload: false })
	}
	handleAlert(type, show) {
		if (type === "showFail") {
			this.setState({ showFail: show });
		}
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
							onClick={async () => {
								await this.onFileUploadHandler();
								this.props.setModificationType("upload");
							}}
						>
							<FormattedMessage
								id="admin.upload" />
						</p>
						<p
							className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red mh1"
							onClick={() => this.handleCloseAddForm()}
						>
							<FormattedMessage
								id="admin.cancel" />
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
					<FormattedMessage
						id="admin.add" />
				</p>
			);
		}
	}
	onFileInputChangeHandler = (event) => {
		this.props.onFileInputChangeHandler(event.target.files[0]);
	};

	onFileUploadHandler = async () => {
		const data = new FormData();
		data.append('image', this.props.selectedFile);
		const myHeaders = new Headers();
		myHeaders.append("Authorization", process.env.REACT_APP_IMGUR_API_CLIENT_ID);
		if (this.props.selectedFile) {
			const response = await fetch('https://api.imgur.com/3/image', {
				method: 'POST',
				headers: myHeaders,
				body: data,
				redirect: 'follow'
			});
			const body = await response.json();
			console.log(body.data.link);
			this.props.onPizzaEditFormChange(body.data.link, "imageurl");
		}
	};
	componentDidMount() {
		if (!this.props.pizzas.length) {
			this.props.requestPizzas();
		}
	}
	componentDidUpdate(prevProps, prevState) {
		const { modificationType, deleteId } = this.props;
		if (modificationType !== prevProps.modificationType) {
			if (modificationType === "update") {
				this.updatePizza();
			}
			else if (modificationType === "upload") {
				this.uploadPizza();
			}
			else if (modificationType === "delete") {
				this.props.deletePizza(deleteId);
			}
			this.props.setModificationType('');
		}
	}
	render() {
		const { pizzas } = this.props;
		return (
			<div className="w-80 flex items-center center">
				<article className="pa2 w-100" style={{ height: 'pizzas.length * 150px' }}>
					<Alert show={this.state.showFail} variant="danger" >
						<p>
							<FormattedMessage
								id="alert.admin" />
						</p>
						<hr />
						<div className="d-flex justify-content-end">
							<Button onClick={() => this.handleAlert("showFail", false)} variant="outline-danger">
								<FormattedMessage
									id="alert.close" />
							</Button>
						</div>
					</Alert>
					<div className="flex justify-between items-center pa2">
						<h1 className="f4 bold left tl mw6 mt-auto mb-auto">
							<FormattedMessage
								id="admin.pizzas" />
						</h1>
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
							if (this.props.editId === pizza.id && this.state.showEdit) {
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
												onClick={async () => {
													await this.onFileUploadHandler();
													this.props.setModificationType('update');
												}}
											>
												<FormattedMessage
													id="admin.save" />
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
												<FormattedMessage
													id="admin.save" />
											</p>
											<p
												className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red"
												onClick={() => {
													this.props.setDeleteId(pizza.id);
													this.props.setModificationType("delete");
												}
												}
											>
												<FormattedMessage
													id="admin.delete" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
