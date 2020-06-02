import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'
import Todos from './Todos'

class App extends React.Component{
  render(){
    var year=2020
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2022} password="123456"/>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
