import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {

        return (
            <ul className="todolist">
                {this.props.items.map((item, index) => (
                    <TodoItem key={item.id} id={item.id} name={index} value={item.value} checked={item.done} onDeleteItem={this.props.onDeleteItem} onItemChange={this.props.onItemChange}/>
                ))}
            </ul>
        );
    }

}

export default TodoList;