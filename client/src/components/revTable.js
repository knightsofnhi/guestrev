import React, { Component } from "react";

class RevTable extends Component {
  constructor() {
    super();
    this.state = {
      guestRev: []
    };
  }

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
          {this.state.guestRev.map(({ id, company, property, task }) => {
            return (
              <tr key={id}>
                <td>{company}</td>
                <td>{property}</td>
                <td>{task}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default RevTable;
