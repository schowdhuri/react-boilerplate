import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(name) {
        if(this.props.onToggle)
            this.props.onToggle(name);
    }
    render() {
        return <ul className="todo-list">
            {this.props.items.map((item, index) => 
                <TodoListItem {...item} onToggle={this.handleToggle} key={index} />
            )}
        </ul>
    }
}
