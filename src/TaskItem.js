import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import SaveIcon from "@material-ui/icons/Save";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    border: "none",
    outline: "none",
    cursor: "default",
    width: "100%",
  },
};

function TaskItem(props) {
  const [isEdit, toggleEdit] = useState(false);

  function onEditClick(e) {
    toggleEdit(isEdit ? false : true);
    props.onChange(e);
  }

  const textStyle = props.isDone ? "line-through" : "none";
  const editButton = isEdit ? <SaveIcon /> : <EditIcon />;

  return (
    <div style={styles.container} data-id={props.id}>
      <Checkbox onChange={props.onTaskDone} disabled={isEdit} />
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
        {editButton}
      </IconButton>
      <IconButton onClick={props.handleRemove}>
        <DeleteIcon>Delete</DeleteIcon>
      </IconButton>
    </div>
  );
}

export default TaskItem;
