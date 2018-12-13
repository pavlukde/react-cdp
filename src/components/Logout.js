import React from 'react';
import { Button } from 'react-bootstrap';

export const Logout = ({ auth, logout }) => (

  auth.isAuthenticated ?
    <div>       
        <div>Hello, {auth.userName}</div>
        <Button onClick={ () => logout() }>Sign Out</Button>       
    </div>
  : <div></div>
);