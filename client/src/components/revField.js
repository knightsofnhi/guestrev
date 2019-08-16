import React, { Component } from "react";

function RevField(props) {
  return (
    <tr key={props.id}>
      <td>
        <input
          onChange={props.handleInputChange("company", props.dataIndex)}
          value={props.company}
        />
      </td>
      <td>
        <input
          onChange={props.handleInputChange("property", props.dataIndex)}
          value={props.property}
        />
      </td>
      <td>
        <input
          onChange={props.handleInputChange("task", props.dataIndex)}
          value={props.task}
        />
      </td>
    </tr>
  );
}

export default RevField;