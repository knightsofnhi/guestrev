import React, { Component } from "react";
import RevField from "./revField";
import API from "../utils/API";

class RevTable extends Component {
  constructor() {
    super();
    this.state = {
      guestRev: []
    };
  }

  handleInputChange = (category, index) => e => {
    const updatedGuestRev = [...this.state.guestRev];
    if (category === "completed") {
      if (updatedGuestRev[index][category] === false) {
        updatedGuestRev[index][category] = true;
      } else {
        updatedGuestRev[index][category] = false;
      }
    } else {
      updatedGuestRev[index][category] = e.target.value;
    }
    this.setState({ guestRev: updatedGuestRev });
  };

  updateData = e => {
    e.preventDefault();
    API.saveData(this.state.guestRev);
    console.log("updateData");
  };

  componentDidMount() {
    fetch("/api/revenue")
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
            <th scope="col">Company</th>
            <th scope="col">Property</th>
            <th scope="col">Completed?</th>
            <th scope="col">Task</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.guestRev.map(
            ({ id, company, property, completed, task, price }, index) => {
              return (
                <RevField
                  dataIndex={index}
                  id={id}
                  company={company}
                  property={property}
                  completed={completed}
                  task={task}
                  price={price}
                  handleInputChange={this.handleInputChange}
                />
              );
            }
          )}
        </tbody>
        <input type="submit" value="Update Data" onClick={this.updateData} />
      </table>
    );
  }
}

export default RevTable;
