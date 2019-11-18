import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component{

  render(){
    //console.log(this.props.todos)
    return this.props.todoAsProps.map(item => (
    <TodoItem 
    key={item.id} 
    todos={item} 
    markComplete={this.props.markComplete}
    delItem={this.props.delItem}
     />
    ))
  }
}

Todos.propTypes = {
    todoAsProps: PropTypes.array.isRequired
}

export default Todos;