import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
// import TodoItem from './css/TodoItem.css'

export class TodoItem extends Component {
    setStyle = () => {
        return {
            backgroundColor: !this.props.todo.completed ? '#ccc' : '#ffc107',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '5px',
            borderBottom: '1px #000 dotted'
        }
    }

    isBoxChecked = () => {
        return !this.props.todo.completed ? false :true
    }
    
    render() {
        
        const {id, title} = this.props.todo;
        return (
            <div className="container">
                <div className="row pb-2">
                    <div className='col-9 col-md-11 text-left'  style = {this.setStyle()}>
                        <input type="checkbox" checked={this.isBoxChecked()} onChange={this.props.markCompleted.bind(this,id)}/>
                        {" "}{title}
                    </div>
                    <div className='col-3 col-md-1 text-right'>
                        <div className='btn-group'>
                        <button 
                            type="button" 
                            className="btn btn-danger delete"
                            onClick={this.props.deleteItem.bind(this,id)}
                        >Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
