import React, {
  Component
} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    toDoList: [],
    lastTaskId: 0,
    details: ''
  }

  addTask = () => {
    let list = this.state.toDoList;
    list[this.state.lastTaskId] = {
      id: this.state.lastTaskId,
      details: this.state.details
    }

    let nextTaskId = this.state.lastTaskId + 1;

    this.setState({
      toDoList: list,
      lastTaskId: nextTaskId,
      details: ''
    })
    
  }

  clearAll = () => {
    this.setState({
      toDoList: [],
      lastTaskId: 0
    })
  }

  deleteLast = () => {
    if (this.state.lastTaskId === 0) {
      return;
    }

    let list = this.state.toDoList;
    let previousTaskId = this.state.lastTaskId - 1;
    list.splice(previousTaskId, 1);

    this.setState({
      toDoList: list,
      lastTaskId: previousTaskId
    })
  }

  handleInputChange = (event) => {
    let taskDetail = event.target.value;

    this.setState({
      details: taskDetail
    })
 
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addTask}>Add</button>
        <button onClick={this.deleteLast}>Remove</button>
        <button onClick={this.clearAll}>Clear</button>
        <form>
          <input type="text" name="taskDetails" value={this.state.details} onChange={this.handleInputChange}></input>
        </form>
          <List items={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;