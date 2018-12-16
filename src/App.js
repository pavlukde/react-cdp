import React, { Component } from 'react';
import './App.css';

import {Footer} from './components/Footer';
import {Header} from './components/Header';
import Login from './components/Login';
import history from './history';
import PrivateRoute from './containers/PrivateRoute';

import {
  Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Loadable from 'react-loadable';
import Spinner from 'react-spinkit';

const Loading = () => <Spinner name="double-bounce" />;

const Courses = Loadable({
  loader: () => import('./containers/Courses'),
  loading: Loading
});

const AddCourse = Loadable({
  loader: () => import('./containers/AddCourse'),
  loading: Loading
});

export class App extends Component {


  render() {


    
    return (
      <div className="App">

        <Header />
        <br/>

        <Router history={history}>
          <Switch>
            <Route  exact path="/" render={() => ( <Redirect to="/courses"/> )}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/courses" component={Courses} />
            <PrivateRoute path="/addCourse" component={AddCourse} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <br/>
        <Footer />
      </div>
    );
  }
  
}


function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
