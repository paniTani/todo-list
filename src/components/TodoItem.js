import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);


        this.done = this.done.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    done() {
        this.props.onItemChange(this.props.id);
    }

    deleteTodo(e) {
        this.props.onDeleteItem(this.props.id);

        e.preventDefault();
    }

    render() {
        return (
            <li >
                <input className="todo-checkbox" id={this.props.id}  onClick={this.done} type="checkbox" value={this.props.value}/>
                <label className={this.props.checked ? "done" : ""} htmlFor={this.props.id}>
                    {this.props.value}
                </label>
                <input type="submit" onClick={this.deleteTodo} className="btn-delete" value="Delete"/>
            </li>
        )
    }
}

export default TodoItem;