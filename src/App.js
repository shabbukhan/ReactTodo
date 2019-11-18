import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
//import uuid from 'uuid';
import axios from "axios";

// class App extends Component{
//   state = {
//     items:[
//       {
//         id: uuid.v4(),
//         title: 'React JSON',
//         completed: false

//       },
//       {
//         id: uuid.v4(),
//         title: 'JavaScript',
//         completed: true

//       },
//       {
//         id: uuid.v4(),
//         title: 'Git Hub',
//         completed: false
//       }
//       ]
//   };

// from axios
class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ items: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    console.log(id);
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  // Delete Item
  // delItem = id =>{
  //   console.log(id);
  //   //this.setState({items: [...this.state.items.filter(f => f.id !== id)]})
  //   // or
  //   this.setState({items: this.state.items.filter(f => f.id !== id)})
  // }

  // from axios/apis
  delItem = id => {
    console.log(id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        this.setState({ items: this.state.items.filter(f => f.id !== id) })
      );
  };

  // Add Todo Item
  // addFromHere = (title) =>{
  //   //console.log(title)
  //   const newTodo = {
  //     id: uuid.v4(),
  //     title,
  //     completed: false
  //   }
  //   this.setState({
  //     items: [...this.state.items, newTodo]
  //   })
  // }

  // Add Todo Item from post request
  addFromHere = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          items: [...this.state.items, res.data]
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodoItem={this.addFromHere} />
                <Todos
                  markComplete={this.markComplete}
                  todoAsProps={this.state.items}
                  delItem={this.delItem}
                />
              </React.Fragment>
            )}
          />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
