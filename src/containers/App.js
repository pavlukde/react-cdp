import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import Courses from '../components/Courses';
import AddCourse from '../components/AddCourse';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {name:'login'};
  }

  handleChange = function(value){
    this.setState({active:value});
  }
  
  render() {

    var active = this.state.active;

    return (
      <div className="App">
      <Header />

      {active === 'login' ? (
            <Login handleChange={this.handleChange}/>
        ) : active === 'courses' ? (
          <Courses />
        ) : active === 'addCourse' ? (
          <AddCourse/>
        ) : <Login />}

      <Footer />
    </div>
    );
  }
}

export default App;
