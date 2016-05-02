import React from "react";
import AddItem from "./AddItem";
import TodoList from "./TodoList";

export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleAdd(newName) {
		console.log(newName);
		this.setState({
			items: this.state.items.concat({
				name: newName,
				completed: false
			})
		});
	}
	handleToggle(name) {
		var items = this.state.items.map((item) => {
			item.completed = item.name == name ? !item.completed : item.completed;
			return item;
		});
		this.setState({
			items: items
		});
	}
	render() {
		return <div className="container">
			<h1>Todo List</h1>
			<AddItem onAdd={this.handleAdd} />
			<TodoList items={this.state.items} onToggle={this.handleToggle} />
		</div>
	}
}
