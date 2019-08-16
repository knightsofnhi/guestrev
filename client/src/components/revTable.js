import React, { Component } from "react";
import RevField from "./revField";

class RevTable extends Component {
  constructor() {
    super();
    this.state = {
      guestRev: []
    };
  }

  handleInputChange = (category, index) => e => {
    const updatedGuestRev = [...this.state.guestRev];

    updatedGuestRev[index][category] = e.target.value;

    this.setState({ guestRev: updatedGuestRev });
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/revenue")
      .then(results => {
        // console.log(results);
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ guestRev: data });
        console.log("state", this.state.guestRev);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company</th>
            <th scope="col">Property</th>
            <th scope="col">Task</th>
          </tr>
        </thead>
        <tbody>
          {this.state.guestRev.map(({ id, company, property, task }, index) => {
            return (

              <RevField
                dataIndex={index}
                id={id}
                company={company}
                property={property}
                task={task}
                handleInputChange={this.handleInputChange}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default RevTable;