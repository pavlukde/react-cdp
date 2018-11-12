import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import Courses from '../components/Courses';
import AddCourse from '../components/AddCourse';

function updateState(text){
  this.setState({text})
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    };

    console.log(this.state.view)
  }

  updateState(value) {
      this.setState({ view: value });
  }

  
  render() {

    var view = this.state.view;

    return (
      <div className="App">

        <Header/>
        <br/>
        <br/>

        {view === 'login' ? (
                  <Login setView={ this.updateState.bind(this) } />
                ) : view === 'courses' ? (
                  <Courses setView={ this.updateState.bind(this)} />
                ) : view === 'addCourse' ? (
                  <AddCourse setView={ this.updateState.bind(this)} />
                ) : null}

        <br/>
        <br/>

        <Footer />
      </div>
    );
  }
}

export default App;
