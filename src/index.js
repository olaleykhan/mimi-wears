import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persist } from './store/store';
import { Provider } from "react-redux";

// import {PersistGate} from "redux-persist/es/integration/react"
import { PersistGate } from "redux-persist/integration/react";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
