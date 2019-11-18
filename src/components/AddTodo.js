import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    //console.log(e.target.value)
    this.setState({
      title: e.target.value
    });
    // this.setState({
    //     [e.target.name]: e.target.value
    // })
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodoItem(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Add ToDo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Add ToDo" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
