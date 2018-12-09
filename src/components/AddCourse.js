import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap';

export
class AddCourse extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
      this.save = this.save.bind(this);
      this.showCourses = this.showCourses.bind(this);
  }


  showCourses(){
    this.props.history.push("/courses");
  }

  save(){
    
    fetch('http://localhost:3001/courses/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {"Content-Type" : "application/json"}
    })
    .then(response => console.log(response.json()))
    .catch(error => console.log(error));
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={4}>
            Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Enter Course Name" 
              name="name" value={this.state.name} onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="description">
          <Col componentClass={ControlLabel} sm={4}>
            Description
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Course Description" 
               name="description" value={this.state.description} onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="date">
          <Col componentClass={ControlLabel} sm={4}>
            Date
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="dd.mm.yyyy" 
               name="date" value={this.state.date} onChange={this.handleChange}/>
          </Col>
        </FormGroup>

          <FormGroup controlId="duration">
          <Col componentClass={ControlLabel} sm={4}>
            Duration
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="min" 
               name="duration" value={this.state.duration} onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="authorsList">
          <Col componentClass={ControlLabel} sm={4}>
            Authors list
          </Col>
          <Col sm={2}>
            <FormControl componentClass="select" multiple>
              <option value="select">Aaaaa</option>
              <option value="other">Bbbbb</option>
              <option value="other">Cccc</option>
              <option value="other">Dddd</option>
              <option value="other">Eeeee</option>
            </FormControl>
          </Col>
          <Col sm={1}>
            <Button>&gt;</Button>
            <Button>&lt;</Button>
          </Col>
          <Col sm={2}>
            <FormControl componentClass="select" multiple>
              <option value="select">Aaaaa</option>
              <option value="other">Bbbbb</option>
              <option value="other">Cccc</option>
              <option value="other">Dddd</option>
              <option value="other">Eeeee</option>
            </FormControl>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={4}>
            <Button onClick={this.save}>Save</Button>
          </Col>
          <Col smOffset={2} sm={2}>
            <Button onClick={this.showCourses}>Cancel</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}