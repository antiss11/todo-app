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

  const textStyle = props.isDone ? "line-through" : "none";

  return (
    <div style={styles.container} data-id={props.id}>
      <input type="checkbox" onClick={props.onTaskDone} disabled={isEdit} />
      <input
        type="text"
        onChange={props.onChange}
        value={props.text}
        style={{ textDecoration: textStyle, ...styles.input }}
        className="task-text"
        readOnly={!isEdit}
      />
      <button onClick={onEditClick} disabled={props.isDone}>
        {isEdit ? "Save" : "Edit"}
      </button>
      <button onClick={props.handleRemove}>Delete</button>
    </div>
  );
}

export default TaskItem;
