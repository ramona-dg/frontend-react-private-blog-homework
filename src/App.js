import React, {useState} from 'react';
import {
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import OverviewBlogPage from "./Pages/OverviewBlogPage";
import BlogPostPage from "./Pages/BlogPostPage";
import './App.css';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/login" activeClassName="active-link">
                            Login </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/blogposts" activeClassName="active-link">
                            Blog Overzicht </NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>

                <Route path="/login">
                    <LoginPage/>
                </Route>

                <Route path="/blogposts">
                    <OverviewBlogPage/>
                </Route>

                <Route path="/blogposts/:blogId">
                    <BlogPostPage/>
                </Route>

            </Switch>

        </>
    );
}

export default App;
