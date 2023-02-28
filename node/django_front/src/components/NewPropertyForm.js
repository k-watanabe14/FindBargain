import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPropertyForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    address: "",
    document: ""
  };

  componentDidMount() {
    if (this.props.property) {
      const { pk, name, document, address } = this.props.property;
      this.setState({ pk, name, document, address });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProperty = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editProperty = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.property ? this.editProperty : this.createProperty}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.address)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPropertyForm;
