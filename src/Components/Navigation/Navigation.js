import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = ({ isSignedIn, isAdmin, user, signOut }) => {
    if (isSignedIn) {
        if (isAdmin) {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <p className="link white-70 hover-white no-underline flex items-center pa1 cms"
                    >
                        Pizza világ CMS
					</p>
                    <div className="flex-grow pa1 flex items-center">
                        <NavLink to="/pizzavilag/orders" className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            style={{ textDecoration: "none", color: "white" }}>
                            Rendelések ellenőrzése
						</NavLink>
                        <NavLink to="/pizzavilag/admin" className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            style={{ textDecoration: "none", color: "white" }}>
                            Kínálat kezelése
						</NavLink>
                        <NavLink to="/pizzavilag/" className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            onClick={signOut}
                            style={{ textDecoration: "none"}}>
                            Kijelentkezés
						</NavLink>
                    </div>
                </nav>
            );
        }
        else {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <NavLink to="/pizzavilag/" className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                        style={{ textDecoration: "none", color: "white" }}>
                        Főoldal
					</NavLink>
                    <div className="flex flex-grow items-center header pl5">
                        <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                    </div>
                    <div className="flex-grow pa1 flex items-center">
                        <p className="f6 link dib white dim mr3 mr4-ns pa1">Üdvözlünk, {user.firstname}</p>
                        <NavLink to="/pizzavilag/" className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            style={{ textDecoration: "none"}}
                            onClick={signOut}>
                            Kijelentkezés
						</NavLink>
                    </div>
                </nav>
            );
        }
    }
    else {
        return (
            <nav className="flex justify-center pa2" style={{ background: "#c4954f" }}>
                <NavLink to="/pizzavilag/" className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                    style={{ textDecoration: "none", color: "white" }}>
                    Főoldal
				</NavLink>
                <div className="flex flex-grow items-center header pl5">
                    <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                </div>
                <div className="flex-grow pa1 flex items-center">
                    <NavLink to="/pizzavilag/signin" className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                        style={{ textDecoration: "none", color: "white" }}>
                        Bejelentkezés
					</NavLink>
                    <NavLink to="/pizzavilag/register" className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                        style={{ textDecoration: "none"}}>
                        Regisztráció
					</NavLink>
                </div>
            </nav>
        );
    }
};
export default Navigation;