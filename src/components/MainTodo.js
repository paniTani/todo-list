import React, { Component } from 'react';
import TodoList from './TodoList';

class MainTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [],
            checked: false,
            checkedClass: "",
            checkedItems: [],
            arrForIndex: [],
            indexValue: 0
        };
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.changedCheckbox = this.changedCheckbox.bind(this);
    }

    addItem(event) {
        const newItem = {
            id: Date.now(),
            value: this.state.value,
            checked: false,
            done: false
        };

        this.setState({
            items: [...this.state.items, newItem],
            value:''
        });

        console.log(this.state.items);

        event.preventDefault();
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    changedCheckbox(itemId) {
        const updatedItems = this.state.items.map(item => {
            if (itemId === item.id)
                item.done = !item.done;

            return item;
        });

        // State Updates are Merged
        this.setState({
            items: [].concat(updatedItems)
        });
    }

    handleDeleteItem(itemId) {
        const updatedItems = this.state.items.filter(item => {
            return item.id !== itemId;
        });

        this.setState({
            items: [].concat(updatedItems)
        });
    }

    render() {
        const { value } = this.state;

        return(
            <div>
                <form onSubmit={this.addItem.bind(this)}>
                    <label>What do you need Todo?<br/>
                        <input value={value} onChange={this.handleChange.bind(this)} type="text"/>
                    </label>
                    <input type="submit" ref="someName" onClick={this.done} value="Add ToDo"/>
                </form>

                <TodoList items={this.state.items} onDeleteItem={this.handleDeleteItem} onItemChange={this.changedCheckbox}/>
            </div>
        )
    }
}

export default MainTodo;
