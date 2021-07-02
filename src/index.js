import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./TaskList";
import TaskItem from "./TaskItem";
import AddButton from "./AddButton";

const styles = {
  width: "50vw",
  border: "1px solid black",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  padding: "10px 0",
};

function getID(taskList) {
  const IDs = Object.keys(taskList);
  if (IDs.length === 0 || !IDs.includes("0")) return 0;
  let freeID = IDs.find((v, i, a) => {
    const next = +a[i + 1];
    if (next - 1 !== +v) {
      return true;
    }
  });
  return ++freeID;
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      taskList: {},
      input: "",
      lastID: 0,
    };
    this.handleTaskAdding = this.handleTaskAdding.bind(this);
    this.handleTaskInput = this.handleTaskInput.bind(this);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleTaskInput(e) {
    this.setState((prevState) => {
      return {
        taskList: prevState.taskList,
        input: this.inputRef.current.value,
        lastID: prevState.lastID,
      };
    });
  }

  handleRemove(e) {
    const id = e.target.parentElement
      .querySelector("input[type='text']")
      .getAttribute("id");
    this.setState((prevState) => {
      const taskList = prevState.taskList;
      delete taskList[id];
      const nextID = getID(this.state.taskList);
      return {
        taskList: taskList,
        input: this.inputRef.current.value,
        lastID: nextID,
      };
    });
  }

  handleTaskEdit(e) {
    this.setState((prevState) => {
      const id = e.target.id;
      const taskList = prevState.taskList;
      taskList[id] = e.target.value;
      return {
        taskList: taskList,
        input: this.inputRef.current.value,
        lastID: prevState.lastID,
      };
    });
  }

  handleTaskAdding(e) {
    this.setState((prevState) => {
      let lastID = getID(this.state.taskList);
      const taskText = prevState.input;
      if (!taskText) return;
      const newTaskList = { ...prevState.taskList };
      newTaskList[lastID] = prevState.input;
      return {
        taskList: newTaskList,
        input: "",
        lastID: lastID,
      };
    });
  }

  render() {
    return (
      <div style={styles}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleTaskInput}
          ref={this.inputRef}
        />
        <AddButton onClick={this.handleTaskAdding} />
        <br />
        <TaskList
          tasks={this.state.taskList}
          onChange={this.handleTaskEdit}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

const CONTAINER = document.getElementById("root");
ReactDOM.render(<TodoList />, CONTAINER);
