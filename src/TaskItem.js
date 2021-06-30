import React from "react";
import AddButton from "./AddButton";

const styles = {
  display: "flex",
  alignItems: "center",
};

function TaskItem(props) {
  return (
    <div style={styles} data-id={props.id}>
      <input type="checkbox" />
      <span>{props.text}</span>
      <button onClick={props.editHandle}>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TaskItem;
