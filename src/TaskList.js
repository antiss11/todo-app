import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

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
          key={id}
          editHandle={this.props.editHandle}
        />
      );
    });
    return <>{tasksItems}</>;
  }
}

export default TaskList;
