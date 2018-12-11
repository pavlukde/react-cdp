import React, { Component } from 'react';
import './App.css';

import {Footer} from './components/Footer';
import {Header} from './components/Header';
import Login from './components/Login';
import {Courses} from './components/Courses';
import {AddCourse} from './components/AddCourse';
import {Auth} from './services/Auth';
import history from './history';

import {
  Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


export class App extends Component {


  constructor(props) {
    super(props);
    this.state = {auth: Auth};
    this.state.auth.updateState = ()=>{
      this.setState({auth: Auth});
    }
}


  render() {

    return (
      <div className="App">

        <Header />
        <br/>

        <Router history={history}>
          <Switch>
            <Route  exact path="/" render={() => ( <Redirect to="/courses"/> )}/>
            <Route path="/login" component={Login} />
            <Route path="/courses" component={Courses} />
            <Route path="/addCourse" component={AddCourse} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <br/>
        <Footer />
      </div>
    );
  }
  
}



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
