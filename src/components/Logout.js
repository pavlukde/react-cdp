import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { login } from '../actions'

const Logout = ({ auth }) => (

  auth.isAuthenticated ?
    <div>       
        <div>Hello, {auth.userName}</div>
        <Button>Sign Out</Button>       
    </div> : <div></div>
);

function mapStateToProps(state) {
  console.log(state.auth);
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Logout)