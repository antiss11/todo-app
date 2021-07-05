import React, { useState } from "react";
import AddButton from "./AddButton";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    border: "none",
    outline: "none",
    cursor: "default",
  },
};

function TaskItem(props) {
  const [isEdit, toggleEdit] = useState(false);

  function onEditClick(e) {
    toggleEdit(isEdit ? false : true);
    props.onChange(e);
  }

  return (
    <div style={styles.container} data-id={props.id}>
      <input type="checkbox" />
      <input
        type="text"
        onChange={props.onChange}
        value={props.text}
        style={styles.input}
        className="task-text"
        readOnly={!isEdit}
      />
      <button onClick={onEditClick}>{isEdit ? "Save" : "Edit"}</button>
      <button onClick={props.handleRemove}>Delete</button>
    </div>
  );
}

export default TaskItem;
