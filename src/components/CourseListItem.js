import React from 'react';
import { Button } from 'react-bootstrap';

export const CourseListItem = ({ course, deleteItem}) => (
       
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
      <Button onClick={() => deleteItem() }>Delete</Button>
    </div>
  </div>
)