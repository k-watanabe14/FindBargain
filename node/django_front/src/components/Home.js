import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PropertyList from "./PropertyList";
import NewPropertyModal from "./NewPropertyModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    properties: []
  };

  componentDidMount() {
    this.resetState();
  }

  getProperties = () => {
    axios.get(API_URL).then(res => this.setState({ properties: res.data }));
  };

  resetState = () => {
    this.getProperties();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PropertyList
              properties={this.state.properties}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewPropertyModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
