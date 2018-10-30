import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Users from './Users';
import Links from './Links';
import Nav from './Nav';
import './App.css';

class App extends Component {
  state = {links:[]}

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          
          <Route exact path="/users" component={Users}/>
          <Route exact path="/links" component={Links}/>
        </div>
      </Router>
    );
  }
}

export default App;

