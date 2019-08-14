import React, { Component } from "react";

function RevField(props) {
  return (
    <tr key={props.id}>
      <td>
        <input onChange={props.handleInputChange} value={props.company} />
      </td>
      <td>
        <input onChange={props.handleInputChange} value={props.property} />
      </td>
      <td>
        <input onChange={props.handleInputChange} value={props.task} />
      </td>
    </tr>
  );
}

export default RevField;
