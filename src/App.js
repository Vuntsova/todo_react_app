import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from "./components/AddTodo"
import About from "./components/About"
import uuid from 'uuid';


export class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Task 1",
        completed: true
      },
      {
        id:uuid.v4(),
        title: "Task 2",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Task 3",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Task 4",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Task 5",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Task 6",
        completed: false
      }
    ]
  }

  markCompleted = (id) => {
    this.setState(
      {
        todos: this.state.todos.map(
          (todo) => {
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo;
          }
        )
    
      }
    )
  }

  editItem =() => {
    console.log("edit item")
  }

  deleteItem =(id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter(todo=>todo.id!==id)]
      }
    )
  }

  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo}></AddTodo>
              <Todos 
              todos={this.state.todos}
              markCompleted = {this.markCompleted}
              editItem = {this.editItem}
              deleteItem = {this.deleteItem}
              ></Todos>
            </React.Fragment>
          )}/>
          <Route exact path="/about" component={About} />
          
      </div>
      </BrowserRouter>
    )
  }
}

export default App
