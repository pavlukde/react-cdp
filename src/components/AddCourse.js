import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap';


export const AddCourse = ({save, cancel}) => (

      <Form horizontal onSubmit={ (evt) => {
          evt.preventDefault();

          let payload = {
            name: evt.target.name.value,
            description: evt.target.description.value,
            date: evt.target.date.value,
            duration: evt.target.duration.value
          };

          save(payload);}
        }>
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={4}>
            Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Enter Course Name" 
              name="name"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="description">
          <Col componentClass={ControlLabel} sm={4}>
            Description
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Course Description" 
               name="description"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="date">
          <Col componentClass={ControlLabel} sm={4}>
            Date
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="dd.mm.yyyy" 
               name="date" />
          </Col>
        </FormGroup>

          <FormGroup controlId="duration">
          <Col componentClass={ControlLabel} sm={4}>
            Duration
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="min" 
               name="duration" />
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
            <Button type="submit">Save</Button>
          </Col>
          <Col smOffset={2} sm={2}>
            <Button onClick={()=>cancel()}>Cancel</Button>
          </Col>
        </FormGroup>
      </Form>
    )
