import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks;
    const taskItems = Object.keys(tasks).map((id) => {
      const taskData = tasks[id];
      return (
        <TaskItem
          key={id}
          id={id}
          onChange={this.props.onChange}
          text={taskData.text}
          editHandle={this.props.editHandle}
          handleRemove={this.props.handleRemove}
          onTaskDone={this.props.onTaskDone}
          isDone={taskData.done}
        />
      );
    });
    return <>{taskItems}</>;
  }
}

export default TaskList;
