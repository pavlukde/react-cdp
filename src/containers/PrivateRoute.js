import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={
      (props) => (
      rest.auth.isAuthenticated 
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

function mapStateToProps(state) {
    return { auth: state.auth };
}
  
export default connect(mapStateToProps)(PrivateRoute)