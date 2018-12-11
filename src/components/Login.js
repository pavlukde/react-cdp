import React,  { Component } from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import { Auth } from '../services/Auth';
import { connect } from 'react-redux'
import { login } from '../actions'

 const Login = ({ dispatch, state = {} }) => {

  

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        state = {
          [name]: value
        };
      }

    function signIn(event){

        event.preventDefault();
        console.log(state.userName);
        dispatch(login(state.userName));
    }

        return(
            <Form horizontal onSubmit={signIn}>
            <FormGroup controlId="formHorizontalUsername">
                <Col componentClass={ControlLabel} sm={4}>
                Username
                </Col>
                <Col sm={4}>
                <FormControl type="text" placeholder="Enter Username"
                    name="userName" onChange={handleChange}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                Password
                </Col>
                <Col sm={4}>
                <FormControl type="password" placeholder="Password"
                    name="password" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={7}>
                <input type="submit" value="Sign in"/>
                </Col>
            </FormGroup>
            </Form>
        );
    }


      
      export default connect()(Login)