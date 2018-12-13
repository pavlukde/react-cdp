import React, {Component} from 'react';
import Logout from '../containers/Logout';

export class Header extends Component {

  render(){
    return(
      <header>
        <Logout />   
      </header>
    )
  }
}