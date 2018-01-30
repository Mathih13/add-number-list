import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/navigation/NavigationBar'
import MainView from './components/MainView'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavigationBar />
          {this.props.children}
        </div>
    );
  }
}

export default App;
