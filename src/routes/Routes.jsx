import React from "react";
import HomePage from "../pages/HomePage";
import Shop from "../pages/shop/Shop";
import Header from "../layouts/header/Header";
import Checkout from "../pages/checkout/Checkout";
// import Auth from "../pages/auth/Auth"
import Auth from "../pages/auth/Auth";
// import Auth from "../pages/auth/Auth.jsx"
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Routes = ({ isLoggedIn }) => {
  return (
    <div>
      <Router>
        {/* writing it as below allows us to pass in props into the component */}
        <Route path="/" component={() => <Header />} />
        {/* <Header currentUser={currentUser} />
                <Route exact path="/props-through-component" component={() => <PropsPage title={`Props through component`} />} /> */}
        {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" exact component={Checkout} />
          {/* <Route path="/auth" exact {isLoggedIn ? <Redirect to="/dashboard" /> : <Auth />} /> */}
          <Route exact path="/auth">
            {isLoggedIn ? <Redirect to="/" /> : <Auth />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.currentUser,
});

export default connect(mapStateToProps)(Routes);
