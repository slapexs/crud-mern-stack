import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeRollNo = (e) => {
    this.setState({ rollno: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };

    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => {
        console.log(res.data);
      });

    // console.log("Student created");
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Email: ${this.state.email}`);
    // console.log(`Rollno: ${this.state.rollno}`);

    this.setState({
      name: "",
      email: "",
      rollno: "",
    });
  };

  render() {
    return (
      <div className="form-wrapper mt-5">
        <h1>Create Student</h1>

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="Roll">
            <Form.Label>Roll No.</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeRollNo}
            />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Create student
          </Button>
        </Form>
      </div>
    );
  }
}