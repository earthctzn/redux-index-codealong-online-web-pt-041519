import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <CreateTodo />
        <TodosContainer />
      </React.Fragment>
    );
  }
}

export default App;
