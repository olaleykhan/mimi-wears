import React from 'react';
import './App.css';
import { auth } from './firebase/firebase.utils';
import Routes from './routes/Routes';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }
  render() {
    return (
      <div className="App">
        <Routes currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
