import React,  { Component } from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import { Auth } from '../services/Auth';
import createHistory from 'history/createBrowserHistory'

export class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userName:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      }

    signIn(event){
        if(!Auth.authenticate(this.state.userName, this.state.password)){
            console.log('loginAttemptFailed');
            this.setState({
                userName:'',
                password:'',
                loginAttemptFailed : true
            });
        }
        this.setState({
            userName:'',
            password:''
        });
        createHistory().push("/courses");
        event.preventDefault();
      }

    render() {
        return(
            <Form horizontal onSubmit={this.signIn}>
            <FormGroup controlId="formHorizontalUsername">
                <Col componentClass={ControlLabel} sm={4}>
                Username
                </Col>
                <Col sm={4}>
                <FormControl type="text" placeholder="Enter Username"
                    name="userName" value={this.state.userName} onChange={this.handleChange}/>
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                Password
                </Col>
                <Col sm={4}>
                <FormControl type="password" placeholder="Password"
                    name="password" value={this.state.password} onChange={this.handleChange}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={7}>
                <input type="submit" value="Sign in"/>
                </Col>
            </FormGroup>
            -{this.loginAttemptFailed}-
            </Form>
        );
    }

}