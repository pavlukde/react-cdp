import React from 'react';
import { Form, FormControl, FormGroup, Button, Col} from 'react-bootstrap';
import {CourseListItem} from './CourseListItem';

export const Courses = ({ search, courses }) => (

      <div>
        <Form horizontal onSubmit={ (evt) => {
                evt.preventDefault();
                search(evt.target.keyword.value);}
                }>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={6}>
              <FormControl type="text" name="keyword" placeholder="Enter name part" />
            </Col>
            <Col sm={2}>
              <Button  type="submit">Find</Button>
            </Col>
            <Col sm={2}>
              <Button>Add Course</Button>
            </Col>
          </FormGroup>
        </Form>

        {
            courses ? courses.map((course) => {
                return <CourseListItem course={course}/>
            }) : <div>No courses found</div>
        }

      </div>
    );