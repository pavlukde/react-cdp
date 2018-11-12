import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button, Col, ControlLabel, Checkbox } from 'react-bootstrap';
import App from '../containers/App';

class Login extends Component {

    render() {
        return(
            <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
                <Col componentClass={ControlLabel} sm={4}>
                Username
                </Col>
                <Col sm={4}>
                <FormControl type="text" placeholder="Enter Username" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={4}>
                Password
                </Col>
                <Col sm={4}>
                <FormControl type="password" placeholder="Password" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={7}>
                <Button onClick={this.showCourses}>Sign in</Button>
                </Col>
            </FormGroup>
            </Form>
        );
    }

}

export default Login;