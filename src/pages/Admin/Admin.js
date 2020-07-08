import React, { Component } from 'react';
import PizzaEditor from '../../components/PizzaEditor/PizzaEditor';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { requestPizzaList, deletePizza, uploadPizza, updatePizza } from '../../redux/actions/app.js';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Env } from '../../utils/Env';
const mapStateToProps = state => {
	return {
		pizzaList: state.managePizzaList.pizzaList,
		user: state.manageUser.user,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		requestPizzaList: () => requestPizzaList(dispatch),
		deletePizza: (id) => deletePizza(dispatch, id),
		uploadPizza: (name, topping, price, imageurl) => uploadPizza(dispatch, name, topping, price, imageurl),
		updatePizza: (id, name, topping, price, imageurl) => updatePizza(dispatch, id, name, topping, price, imageurl)
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
			pizzaEdit: {
				id: '',
				name: '',
				topping: '',
				price: '',
				imageurl: '',
				editId: '',
				deleteId: '',
				modificationType: '',
				selectedFile: ''
			}
		};
	}
	changePizza(pizza) {
		this.setState({ showEdit: true, pizzaEdit: pizza, editId: pizza.id });
	}
	newPizza() {
		this.setState({ pizzaEdit: [], showUpload: true });
	}
	onFormChange = (event) => {
		this.setState(Object.assign(this.state.pizzaEdit, { [event.target.id]: event.target.value }));
	};
	setModificationType = (type) => {
		this.setState({modificationType: type});
	}
	setDeleteId = (id) => {
		this.setState({deleteId: id});
	}
	updatePizza = async () => {
		if (!this.state.pizzaEdit.name || !this.state.pizzaEdit.topping || !this.state.pizzaEdit.price) {
			this.handleAlert("showFail", true);
		}
		else {
			await this.props.updatePizza(this.state.pizzaEdit.id, this.state.pizzaEdit.name, this.state.pizzaEdit.topping, this.state.pizzaEdit.price, this.state.pizzaEdit.imageurl);
			
			await this.setState({ pizzaEdit: [], showEdit: false });
		}
	}
	uploadPizza = async () => {
		if (!this.state.pizzaEdit.name || !this.state.pizzaEdit.topping || !this.state.pizzaEdit.price) {
			this.handleAlert("showFail", true);
		}
		else {
			await this.props.uploadPizza(this.state.pizzaEdit.name, this.state.pizzaEdit.topping, this.state.pizzaEdit.price, this.state.pizzaEdit.imageurl);
			
			await this.setState({ pizzaEdit: [],showUpload: false });
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
								this.setModificationType("upload");
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
	onFileInputChangeHandler = async (event) => {
		this.setState({selectedFile: event.target.files[0]})
	};
	onFileUploadHandler = async () => {
		const data = new FormData();
		data.append('image', this.state.selectedFile);
		const myHeaders = new Headers();
		myHeaders.append("Authorization", Env.apiClientIDImgur);
		if (this.state.selectedFile) {
			const response = await fetch(Env.apiUrlImgur, {
				method: 'POST',
				headers: myHeaders,
				body: data,
				redirect: 'follow'
			});
			const body = await response.json();
			this.setState(Object.assign(this.state.pizzaEdit, { imageurl: body.data.link }));


		}
	};
	componentDidMount() {
		if (!this.props.pizzaList.length) {
			this.props.requestPizzaList();
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		const { modificationType, deleteId } = this.state;
		if (modificationType !== prevState.modificationType) {
			if (modificationType === "update") {
				this.updatePizza();
			}
			else if (modificationType === "upload") {
				this.uploadPizza();
			}
			else if (modificationType === "delete") {
				this.props.deletePizza(deleteId);
			}
			await this.setState({modificationType: ''});
			this.props.requestPizzaList();
		}
	}
	render() {
		const { pizzaList } = this.props;
		return (
			<div className="w-80 flex items-center center">
				<article className="pa2 w-100" style={{ height: 'pizzaList.length * 150px' }}>
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
								id="admin.pizzaList" />
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
						{pizzaList.map((pizza, i) => {
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
												onClick={async () => {
													await this.onFileUploadHandler();
													this.setModificationType('update');
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
													id="admin.edit" />
											</p>
											<p
												className="f6 grow no-underline br-pill ph3 pv2 dib white pointer ba bw0 bg-dark-red"
												onClick={() => {
													this.setDeleteId(pizza.id);
													this.setModificationType("delete");
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
