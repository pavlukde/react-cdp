import React from 'react';
import { Form, FormControl, FormGroup, Button, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import CourseListItem from './CourseListItem';

const Courses = () => (

<div>
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col sm={6}>
        <FormControl type="text" placeholder="Enter name part or date" />
      </Col>
      <Col sm={2}>
        <Button>Find</Button>
      </Col>
      <Col sm={2}>
        <Button>Add Course</Button>
      </Col>
    </FormGroup>
  </Form>

  <CourseListItem/>
  <CourseListItem/>
  <CourseListItem/>

</div>
  
);

export default Courses;