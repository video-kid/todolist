import React, {
  Component
} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    toDoList: [],
    lastTaskId: 0
  }

  addTask = () => {
    let list = this.state.toDoList;
    list[this.state.lastTaskId] = this.state.lastTaskId;

    let nextTaskId = this.state.lastTaskId + 1;

    this.setState({
      toDoList: list,
      lastTaskId: nextTaskId
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

  render() {
    return (
      <div className="App">
        <button onClick={this.addTask}>Add</button>
        <button onClick={this.deleteLast}>Remove</button>
        <button onClick={this.clearAll}>Clear</button>
          <List items={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;