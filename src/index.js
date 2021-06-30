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

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      taskList: {},
      input: "",
      lastID: 0,
    };
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.editHandle = this.editHandle.bind(this);
  }

  handleInput(e) {
    this.setState((prevState) => {
      return {
        taskList: prevState.taskList,
        input: this.inputRef.current.value,
      };
    });
  }

  editHandle(e) {
    let parent = e.target.parentNode;
    const id = parent.dataset.id;
  }

  addTaskHandler(e) {
    this.setState((prevState) => {
      let lastID = prevState.lastID;
      const taskText = prevState.input;
      if (!taskText) return;
      const newTaskList = { ...prevState.taskList };
      newTaskList[lastID] = prevState.input;
      return {
        taskList: newTaskList,
        input: "",
        lastID: ++lastID,
      };
    });
  }

  render() {
    return (
      <div style={styles}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInput}
          ref={this.inputRef}
        />
        <AddButton onClick={this.addTaskHandler} />
        <br />
        <TaskList
          tasks={this.state.taskList}
          onChange={this.handleInput}
          editHandle={this.editHandle}
        />
      </div>
    );
  }
}

const CONTAINER = document.getElementById("root");
ReactDOM.render(<TodoList />, CONTAINER);
