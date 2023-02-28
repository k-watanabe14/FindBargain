import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPropertyModal from "./NewPropertyModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PropertyList extends Component {
  render() {
    const properties = this.props.properties;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Document</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!properties || properties.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            properties.map(property => (
              <tr key={property.pk}>
                <td>{property.name}</td>
                <td>{property.address}</td>
                <td>{property.document}</td>
                <td>{property.registrationDate}</td>
                <td align="center">
                  <NewPropertyModal
                    create={false}
                    property={property}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={property.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PropertyList;