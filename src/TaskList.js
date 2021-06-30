import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    let tasksEntries = Object.entries(this.props.tasks);
    let tasksItems = tasksEntries.map((taskData) => {
      const id = taskData[0];
      const text = taskData[1];
      const isEditable = taskData[2];
      return (
        <TaskItem
          key={id}
          id={id}
          onChange={this.props.onChange}
          text={text}
          editHandle={this.props.editHandle}
          isEditable={this.props.isEditable}
        />
      );
    });
    return <>{tasksItems}</>;
  }
}

export default TaskList;
