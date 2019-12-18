import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./action";

const App = props => {
  const [todo, setTodo] = useState("");

  const handleChange = event => {
    console.log(event);
    if (event.keyCode === 13) {
      console.log("enters");
      this.handleClick(event);
    } else {
      console.log("type");
      setTodo(event.target.value);
    }
  };

  const handleClick = event => {
    props.addTodo(todo);
    setTodo("");
  };

  const handleDelete = index => {
    props.removeTodo(index);
  };

  // const handleEdit = index => {

  // }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input type="text" value={todo} onChange={handleChange} />
      <button name="Add" onClick={handleClick}>
        Add
      </button>
      <br />
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((list, index) => (
            <li key={`list-${new Date().valueOf()}`}>
              {list} <button name="edit">Edit</button>
              <button name="delete" onClick={event => handleDelete(index)}>
                {" "}
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todos => dispatch(addTodo(todos)),
    removeTodo: todoList => dispatch(removeTodo(todoList))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
