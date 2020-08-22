import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovie from './SearchMovie';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovie />
      </div>
    )
  }
}

export default App;
