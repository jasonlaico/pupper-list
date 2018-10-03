import React, { Component } from 'react';

import DogList from './Components/DogList/DogList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogList />
      </div>
    );
  }
}

export default App;
