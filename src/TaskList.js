import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks;
    const taskItems = tasks.map((taskData) => {
      return (
        <TaskItem
          key={taskData.id}
          id={taskData.id}
          onChange={this.props.onChange}
          text={taskData.text}
          editHandle={this.props.editHandle}
          handleRemove={this.props.handleRemove}
        />
      );
    });
    return <>{taskItems}</>;
  }
}

export default TaskList;
