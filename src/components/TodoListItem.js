import React from "react";

export default class TodoItemList extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }
    toggleCompleted() {
        if(this.props.onToggle)
            this.props.onToggle(this.props.name, !this.props.completed);
    }
    render() {
        return <li className={"todo-item " + (this.props.completed ? "completed" : "")}>
            <label>
                <input type="checkbox" checked={!!this.props.completed} onChange={this.toggleCompleted} />
                {this.props.name}
            </label>
        </li>
    }
}
