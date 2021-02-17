import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <h1 className="display-2">
            <span className="text-danger font-weight-bold">MERN</span> STACK -
            CRUD
          </h1>
        </div>
      </div>
    );
  }
}
