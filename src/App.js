import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log("[snapshot]", snapshot);
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log("[state]", this.state));
        });
        console.log("[userRef]", userRef);

        console.log("[state]", this.state);
      }
      else {
        this.setState({ currentUser: userAuth });
        console.log("else", userAuth);
        console.log("else", this.state);
      }

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
