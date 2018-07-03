import React, {
  Component
} from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    toDoList: [],
    lastTaskId: 0,
    details: '',
    taskDate: ''
  }


  addTask = () => {
    
    let list = this.state.toDoList;
    list[this.state.lastTaskId] = {
      id: this.state.lastTaskId,
      details: this.state.details,
      taskDate: new Date()
    }

    let nextTaskId = this.state.lastTaskId + 1;

    this.setState({
      toDoList: list,
      lastTaskId: nextTaskId,
      details: '',
      taskDate: ''
    })
    
  }


  clearAll = () => {
    this.setState({
      toDoList: [],
      lastTaskId: 0
    })
  }

  deleteCurrent = (taskId) => {
    if (this.state.lastTaskId === 0) {
      return;
    }

    let list = this.state.toDoList;
    let markedTaskId = taskId;
    list.splice(markedTaskId, 1);

    this.setState({
      toDoList: list
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
      <header>
      <i class="fas fa-list-alt"></i>
        <h1>To Do List</h1>
      </header>
      <section>
        <div className="addingContainer">
          <form>
            <input type="text" name="taskDetails" value={this.state.details} onChange={this.handleInputChange}></input>
          </form>
          <button className="addButton" onClick={this.addTask}>Add</button>
          <div style={{clear: 'both'}}></div>
        </div>
        </section>
        <main>
        <div className='listContainer'>
          <List items={this.state.toDoList} delete={this.deleteCurrent}/>
        </div>
        </main>
          <button className="clearButton" onClick={this.clearAll}><i class="fas fa-sync-alt"></i></button>
      </div>
    );
  }
}

export default App;