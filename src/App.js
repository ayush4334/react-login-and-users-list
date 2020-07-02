import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginPage from './Login1';
import Users from './User';
import './App.css';

const Login = () => (
  <LoginPage />
);

const User = () => (
  <Users />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/users" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;