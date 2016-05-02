import React from "react";

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAdd(ev) {
		var newName = this.refs.newTodoName.value;
		if(this.props && this.props.onAdd && newName)
			this.props.onAdd(newName);
		this.refs.newTodoName.value = "";
	}
	handleSubmit(ev) {
		if(ev.keyCode===13)
			this.handleAdd(ev);
	}
	render() {
		return <div>
			<input ref="newTodoName"
				onKeyUp={this.handleSubmit}
				type="text"
				className="new-item-name"
				placeholder="Add new todo" />
			<button className="btn bt-default btn-add" onClick={this.handleAdd}>+</button>
		</div>
	}
}
