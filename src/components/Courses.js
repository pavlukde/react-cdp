import React,{Component} from 'react';
import { Form, FormControl, FormGroup, Button, Col} from 'react-bootstrap';
import CourseListItem from './CourseListItem';

class Courses extends Component {

  constructor(props) {
      super(props);
  }

  addCourse(){
      this.props.setView('addCourse');
  }

  render() {
    return(
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
              <Button onClick={this.addCourse.bind(this)}>Add Course</Button>
            </Col>
          </FormGroup>
        </Form>

        <CourseListItem/>
        <CourseListItem/>
        <CourseListItem/>

      </div>
    );
  }
  
}

export default Courses;