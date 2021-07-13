import React from "react";
import TaskItem from "./TaskItem";

const tasksContainerStyles = {
  display: "flex",
  width: "100%",
  flexFlow: "column wrap",
};

class TaskList extends React.Component {
  render() {
    const tasks = this.props.tasks;
    const tasksArray = [];
    for (const id in tasks) {
      const taskData = tasks[id];
      taskData["id"] = id;
      tasksArray.push(taskData);
    }
    tasksArray.sort((task1, task2) => task1.added - task2.added);
    const taskItems = tasksArray.map((task) => {
      console.log(task);
      return (
        <TaskItem
          key={task.id}
          id={task.id}
          onChange={this.props.onChange}
          text={task.text}
          editHandle={this.props.editHandle}
          handleRemove={this.props.handleRemove}
          onTaskDone={this.props.onTaskDone}
          isDone={task.done}
        />
      );
    });
    const taskItemsSorted = taskItems.sort();
    return <div style={tasksContainerStyles}>{taskItems}</div>;
  }
}

export default TaskList;
