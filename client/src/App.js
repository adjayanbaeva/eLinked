import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './actions/types';

//Check for token in case user steps away from domain for short period of time and comes back
if(localStorage.jwtToken){

  //Set token to Auth Header
  setAuthToken(localStorage.jwtToken);

  //Decode token
  const decoded = jwt_decode(localStorage.jwtToken);

  //Write data to Redux store
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  })
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path = "/" component = {Landing} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
  
}

export default App;
