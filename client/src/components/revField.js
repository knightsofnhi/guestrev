import React, { Component } from "react";
import "../style/revField.css";

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
          type="checkbox" className="checkbox"
          onChange={props.handleInputChange("completed", props.dataIndex)}
          checked={props.completed}
        />

      </td>
      <td>
        <input
          onChange={props.handleInputChange("task", props.dataIndex)}
          value={props.task}
        />
      </td>
      <td>
        <input
          onChange={props.handleInputChange("price", props.dataIndex)}
          value={props.price}
        />
      </td>
    </tr>
  );
}

export default RevField;
