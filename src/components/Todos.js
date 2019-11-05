import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import TodoItem from './TodoItem'

export class Todos extends Component {
    render() {
        return (
            <div className="jumbotron text-center container">
                {
                    this.props.todos.map(
                        (todo) => <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        markCompleted={this.props.markCompleted}
                        editItem={this.props.editItem}
                        deleteItem={this.props.deleteItem}
                        ></TodoItem>
                    )
                }
            </div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos
