import React,{ Component } from 'react';
import { Button } from 'react-bootstrap';
import { Auth } from '../services/Auth';
import createHistory from 'history/createBrowserHistory'



export class Logout extends Component {

  signOut(){
    Auth.signout();
    createHistory().push("/login");
  }

  render() {
    if(Auth.isAuthenticated){
    return(
      <div>       
          <div>Hello, {Auth.userName}</div>
          <Button onClick={this.signOut}>Sign Out</Button>       
      </div>
    )}
    else return(
      <div></div>
    )
  }
}
