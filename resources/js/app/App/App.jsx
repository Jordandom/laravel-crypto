import { create } from "lodash";
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

export default function App() {
    const [user, setUser] = useState(null);
    const UserContext = createContext(user);
    return (
        <UserContext.Provider value={user}>
            <Router>
                <UserContext.Consumer>
                    {value => <Header user={value} />}
                </UserContext.Consumer>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" children={<Home />} />
                        <Route path="/login" children={<Login />} />
                        <Route path="/register" children={<Register />} />
                    </Switch>
                </main>
            </Router>
        </UserContext.Provider>
    );
}
