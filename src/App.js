import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Overview from './Pages/Overview';
import Home from './Pages/Home';
import Login from './Pages/Login';
import BlogPost from './Pages/BlogPost';
import Navigation from './components/Navigation';

function PrivateRoute({ children, isAuth, ...rest}) {
    // omdat we nog steeds alle mogelijke properties zoals exact etc. op Route willen zetten, kunnen we met de ...rest operator zeggen:
    // al die andere props die je verder nog ontvangt, zet die ook allemaal maar op <Route>
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <div>
            <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated} />
                </Route>
                <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                    <Overview />
                </PrivateRoute>
                <PrivateRoute exact path="/blog/:Id" isAuth={isAuthenticated}>
                    <BlogPost />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;