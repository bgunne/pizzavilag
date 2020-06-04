import React from "react";
import "./Navigation.css";
const Navigation = ({ onRouteChange, isSignedIn, isAdmin, user }) => {
    if (isSignedIn) {
        if (isAdmin) {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <p className="link white-70 hover-white no-underline flex items-center pa1 cms"
                    >
                        Pizza világ CMS
					</p>
                    <div className="flex-grow pa1 flex items-center">
                        <p className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            onClick={() => onRouteChange("orders")}>
                            Rendelések ellenőrzése
						</p>
                        <p className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                            onClick={() => onRouteChange("admin")}>
                            Kínálat kezelése
						</p>
                        <p className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            onClick={() => onRouteChange("signout")}>
                            Kijelentkezés
						</p>
                    </div>
                </nav>
            );
        }
        else {
            return (
                <nav className="flex justify-center pa1" style={{ background: "#c4954f" }}>
                    <p className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                        onClick={() => onRouteChange("home")}>
                        Főoldal
					</p>
                    <div className="flex flex-grow items-center header pl5">
                        <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                    </div>
                    <div className="flex-grow pa1 flex items-center">
                        <p className="f6 link dib white dim mr3 mr4-ns pa1">Üdvözlünk, {user.firstname}</p>
                        <p className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                            onClick={() => onRouteChange("signout")}>
                            Kijelentkezés
						</p>
                    </div>
                </nav>
            );
        }


    }
    else {
        return (
            <nav className="flex justify-center pa2" style={{ background: "#c4954f" }}>
                <p className="link white-70 hover-white no-underline flex items-center pa1 pointer"
                    onClick={() => onRouteChange("home")}>
                    Főoldal
				</p>
                <div className="flex flex-grow items-center header pl5">
                    <p className="i ma0" style={{ color: "#FAD784" }}>Pizza világ</p>
                </div>
                <div className="flex-grow pa1 flex items-center">

                    <p className="f6 link dib white dim mr3 mr4-ns pa1 pointer"
                        onClick={() => onRouteChange("signin")}>
                        Bejelentkezés
					</p>
                    <p className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer"
                        onClick={() => onRouteChange("register")}>
                        Regisztráció
					</p>

                </div>
            </nav>
        );
    }
};

export default Navigation;