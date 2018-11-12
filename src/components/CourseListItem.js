import React from 'react';
import { Form, FormControl, FormGroup, Button, Col, ControlLabel, Checkbox } from 'react-bootstrap';


const CourseListItem = () => (

<div className="courseItem">
  <div className="courseItem_left">
    <h2>Video Course 1</h2>
    <div className="courseItem_duration">2h 15min</div>
    <div className="courseItem_date">10.11.2018</div>
    <div className="descr">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
  <div className="courseItem_right">
    <Button>Edit</Button>
    <Button>Delete</Button>
  </div>
</div>


);

export default CourseListItem;