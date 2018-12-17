import React from 'react';
import { Form, FormControl, FormGroup, Button, Col} from 'react-bootstrap';
import {CourseListItem} from './CourseListItem';
import history from '../history';
import lifecycle from 'react-pure-lifecycle';
import VirtualList from 'react-tiny-virtual-list';


const componentDidMount = (props) => {
  props.search('');
};

const methods = {
  componentDidMount
};

const Courses = ({ search, courses, deleteItem }) => (
  
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
              <Button onClick={()=>history.push('/addCourse')}>Add Course</Button>
            </Col>
          </FormGroup>
        </Form>

        {
          courses ?
          <VirtualList
            width={800}
            height={350}
            overscanCount={3}
            itemCount={courses.length}
            itemSize={130}
            style={{'overflowX': 'hidden'}}
            renderItem={({ index, style }) =>{
              let course = courses[index];
              return (
                <CourseListItem style={style} key={course.id} course={course} deleteItem={() => deleteItem(course.id)}/>
              )}
            }
          /> : <div>No courses found</div>
        }
      </div>
    );

    export default lifecycle(methods)(Courses);