import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

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
      {/* <input type="checkbox" onClick={props.onTaskDone} disabled={isEdit} /> */}
      <Checkbox onChange={props.onTaskDone} />
      <input
        type="text"
        onChange={props.onChange}
        value={props.text}
        style={{ textDecoration: textStyle, ...styles.input }}
        className="task-text"
        readOnly={!isEdit}
      />
      <IconButton
        onClick={onEditClick}
        disabled={props.isDone}
        data-id={props.id}
      >
        <EditIcon>{isEdit ? "Save" : "Edit"}</EditIcon>
      </IconButton>
      <IconButton onClick={props.handleRemove}>
        <DeleteIcon>Delete</DeleteIcon>
      </IconButton>
    </div>
  );
}

export default TaskItem;
