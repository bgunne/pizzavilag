import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Path } from "../../utils/Path";

class PrivateRoute extends Component {
    render() {
        const { isLoggedIn, isAdmin, onlyAdmin, ...otherProps } = this.props;
        if (!isLoggedIn) {
			return <Redirect to={Path.signIn} />;
            
        }
        if (!isAdmin) {
            return (
                <p>
                    <FormattedMessage id="admin.accessDenied" />
                </p>
            );
        }
        return (
            <Route {...otherProps} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.manageUser.isSignedIn,
        isAdmin: state.manageUser.isAdmin,
    }
};

export default connect(mapStateToProps)(PrivateRoute);
