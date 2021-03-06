import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FormattedMessage } from 'react-intl';
import { Path } from "../../utils/Path";
const Navigation = ({ isSignedIn, isAdmin, user, signOut, emptySearchField }) => {
    if (isSignedIn) {
        if (isAdmin) {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <p className="link white-70 hover-white no-underline flex items-center pa1 cms"
                    >
                        <FormattedMessage
                            id="navigation.CMS" />
                    </p>
                    <div className="flex-grow pa1 flex items-center">
                        <NavLink to={Path.orders} className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            style={{ textDecoration: "none", color: "white" }}>
                            <FormattedMessage
                                id="navigation.orders" />
                        </NavLink>
                        <NavLink to={Path.admin} className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            style={{ textDecoration: "none", color: "white" }}>
                            <FormattedMessage
                                id="navigation.manage" />
                        </NavLink>
                        <NavLink to={Path.root} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            onClick={signOut}
                            style={{ textDecoration: "none" }}>
                            <FormattedMessage
                                id="navigation.signOut" />
                        </NavLink>
                    </div>
                </nav>
            );
        }
        else {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <NavLink to={Path.root} className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                        style={{ textDecoration: "none", color: "white" }}
                        onClick={emptySearchField}>
                        <FormattedMessage
                            id="navigation.home" />
                    </NavLink>
                    <div className="flex flex-grow items-center header pl5">
                        <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                    </div>
                    <div className="flex-grow pa1 flex items-center">
                        <p className="f6 link dib white dim mr3 mr4-ns pa1"><FormattedMessage
                            id="navigation.welcome" values={{ name: user.firstname }} /></p>
                        <NavLink to={Path.root} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            style={{ textDecoration: "none" }}
                            onClick={signOut}>
                            <FormattedMessage
                                id="navigation.signOut" />
                        </NavLink>
                    </div>
                </nav>
            );
        }
    }
    else {
        return (
            <nav className="flex justify-center pa2" style={{ background: "#c4954f" }}>
                <NavLink to={Path.root} className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={emptySearchField}>
                    <FormattedMessage
                        id="navigation.home" />
                </NavLink>
                <div className="flex flex-grow items-center header pl5">
                    <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                </div>
                <div className="flex-grow pa1 flex items-center">
                    <NavLink to={Path.signIn} className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                        style={{ textDecoration: "none", color: "white" }}>
                        <FormattedMessage
                            id="navigation.signIn" />
                    </NavLink>
                    <NavLink to={Path.register} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                        style={{ textDecoration: "none" }}>
                        <FormattedMessage
                            id="navigation.register" />
                    </NavLink>
                </div>
            </nav>
        );
    }
};
export default Navigation;