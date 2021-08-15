import React from 'react';
import { connect } from 'react-redux'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './store/actions/index.actions';

import './App.css';

import Routes from './routes/Routes.jsx';


class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log("[snapshot]", snapshot);
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      else {
        setCurrentUser(null);
      }

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => { dispatch(setCurrentUser(user)) }
});

export default connect(null, mapDispatchToProps)(App);
