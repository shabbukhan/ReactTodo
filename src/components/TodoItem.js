import React, { Component } from "react";
//short rce tab
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#dedede",
      borderBottom: "1px solid #ccc",
      padding: "10px",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todos;
    //console.log(title)
    return (
      <div style={this.getStyle()}>
        <input
          onChange={this.props.markComplete.bind(this, id)}
          type="checkbox"
        />
        {title}
        <button onClick={this.props.delItem.bind(this, id)} className="button">
          x
        </button>
      </div>
    );
  }
}

export default TodoItem;
