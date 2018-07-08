import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  state = {
    toDoList: [],
    lastTaskId: 0,
    details: "",
    taskDate: ""
  };

  addTask = () => {
    let list = this.state.toDoList;
    list[this.state.lastTaskId] = {
      id: this.state.lastTaskId,
      details: this.state.details,
      taskDate: new Date(),
      detailsVisibility: "hidden"
    };

    let nextTaskId = this.state.lastTaskId + 1;

    this.setState({
      toDoList: list,
      lastTaskId: nextTaskId,
      details: "",
      taskDate: ""
    });
  };

  clearAll = () => {
    this.setState({
      toDoList: [],
      lastTaskId: 0
    });
  };

  deleteCurrent = taskId => {
    if (this.state.lastTaskId === 0) {
      return;
    }
    let list = this.state.toDoList;
    let markedTaskId = taskId;
    list.splice(markedTaskId, 1);

    this.setState({
      toDoList: list
    });
  };

  handleInputChange = event => {
    let taskDetail = event.target.value;

    this.setState({
      details: taskDetail
    });
  };

  visibilityToggler = taskId => {
    let list = this.state.toDoList;
    let visibilityState = list[taskId].detailsVisibility;

    if (visibilityState === "hidden") {
      visibilityState = "showed";
    } else {
      visibilityState = "hidden";
    }

    list[taskId].detailsVisibility = visibilityState;

    this.setState({
      toDoList: list
    });

    console.log(visibilityState);
    console.log(taskId);
  };

  render() {
    return (
      <div className="App">
        <header>
          <i className="fas fa-list-alt" />
          <h1>To Do List</h1>
        </header>
        <section>
          <div className="addingContainer">
            <form>
              <input
                type="text"
                name="taskDetails"
                value={this.state.details}
                onChange={this.handleInputChange}
              />
            </form>
            <button className="addButton" onClick={this.addTask}>
              Add
            </button>
            <div style={{ clear: "both" }} />
          </div>
        </section>
        <main>
          <div className="listContainer">
            <List
              items={this.state.toDoList}
              delete={this.deleteCurrent}
              toggler={this.visibilityToggler}
            />
          </div>
        </main>
        <button className="clearButton" onClick={this.clearAll}>
          <i className="fas fa-sync-alt" />
        </button>
      </div>
    );
  }
}

export default App;
