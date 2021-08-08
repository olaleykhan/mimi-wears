import React from 'react';
import HomePage from '../pages/HomePage';
import Shop from '../pages/shop/Shop';
import Header from '../layouts/header/Header';
// import Auth from "../pages/auth/Auth"
import Auth from '../pages/auth/Auth'
// import Auth from "../pages/auth/Auth.jsx"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = ({ currentUser }) => {
    return (
        <div>

            <Router>
                <Route path="/" component={() => <Header currentUser={currentUser} />} />
                {/* <Header currentUser={currentUser} />
                <Route exact path="/props-through-component" component={() => <PropsPage title={`Props through component`} />} /> */}

                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/auth" exact component={Auth} />
                </Switch >
            </Router>
        </div>
    )
}

export default Routes;