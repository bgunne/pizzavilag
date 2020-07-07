import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { Path } from "../../utils/Path";

class GuestRoute extends Component {
	render() {
		const { isLoggedIn, ...otherProps } = this.props;
		if (this.props.isLoggedIn) {
			return <Redirect to={Path.pizzaList} />;
		}
		return (
			<Route {...otherProps} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.manageUser.isSignedIn,
	}
};

export default connect(mapStateToProps)(GuestRoute);
