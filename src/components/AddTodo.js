import React, { Component } from 'react'

export class AddTodo extends Component {
    
    state = {
        title: ""
    }

    getValue = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    SubmitTodo = () => {
        this.props.AddTodo(this.state.title)
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div className="container text-center bg-warning input-group pb-3">
                <input 
                    type="text" 
                    name="title"
                    className="form-control" 
                    placeholder="Add to the list"
                    value={this.state.title}
                    onChange={this.getValue}/>
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.SubmitTodo} type="submit">Add</button>
                </div>
            </div>
        )
    }
}

export default AddTodo
