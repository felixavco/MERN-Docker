import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: ""
    }
    console.log("Constructor")

  }
  componentWillMount(){
    axios.get('/test')
      .then(res => {
        this.setState({ mode: res.data.msg })
      })
      .catch(err => console.error(err))
      console.log(this.state.mode)
  }
  
  render() {
    console.log("render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{this.state.mode}</h3>
        </header>
      </div>
    );
  }
}

export default App;
