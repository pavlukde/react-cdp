import React,{Component} from 'react';
import { Form, FormControl, FormGroup, Button, Col} from 'react-bootstrap';
import { CourseListItem } from './CourseListItem';
import { CoursesService } from '../services/CoursesService';

export class Courses extends Component {

  constructor(props) {
      super(props);
      this.state = {courses:[]};
  }

  addCourse(){
    this.props.history.push("/addCourse");
  }

  componentDidMount() {
    const setState = this.setState.bind(this);
    fetch('http://localhost:3001/courses')
    .then(response => response.json())
    .then(data => {
        this.setState({ courses: data });
    });
  
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


        {
         //   this.state.courses.map((item, key) => {
           //     return <CourseListItem course={item}/>
            //})
        }

      </div>
    );
  }
  
}