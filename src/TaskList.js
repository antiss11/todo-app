import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    let tasksEntries = Object.entries(this.props.tasks);
    let tasksItems = tasksEntries.map((taskData) => {
      const id = taskData[0];
      const text = taskData[1];
      return (
        <TaskItem
          key={id}
          id={id}
          onChange={this.props.onChange}
          text={text}
          editHandle={this.props.editHandle}
          handleRemove={this.props.handleRemove}
        />
      );
    });
    return <>{tasksItems}</>;
  }
}

export default TaskList;
