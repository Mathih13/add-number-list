import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/navigation/NavigationBar'
import MainView from './components/MainView'

import NavigationStore from './stores/NavigationStore'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentElement: NavigationStore.getCurrent(),

    }
  }

  componentWillMount() {
    NavigationStore.on('navigationChange', () => {
      this.setState({
        currentElement: NavigationStore.getCurrent()
      })
    })
  }


  render() {
    return (
      <div className="App">
        <NavigationBar />
        <MainView element={this.state.currentElement}/>
      </div>
    );
  }
}

export default App;
