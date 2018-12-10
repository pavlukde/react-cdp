import React,{Component} from 'react';
import { Button } from 'react-bootstrap';

export class CourseListItem extends Component {


  render() {

    let course = this.props.course;
    return(
            
      <div className="courseItem">
        <div className="courseItem_left">
          <h2>{course.name}</h2>
          <div className="courseItem_duration">{course.duration}</div>
          <div className="courseItem_date">{course.date}</div>
          <div className="descr">
            {course.description}
          </div>
        </div>
        <div className="courseItem_right">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
      );
    }
    
  }
