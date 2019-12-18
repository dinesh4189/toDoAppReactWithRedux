import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./action";

const App = props => {
  const [todo, setTodo] = useState("");

  const handleChange = event => {
    if (event.keyCode === 13) {
      this.handleClick(event);
    } else {
      setTodo(event.target.value);
    }
  };

  const handleClick = event => {
    props.addTodo(todo);
    setTodo("");
  };

  const handleDelete = id => {
    props.removeTodo(id);
  };

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
          props.todos.map(list => (
            <li key={`list-${list.id}`}>
              {list.description}
              {/* <button name="edit">Edit</button> */}
              <button name="delete" onClick={event => handleDelete(list.id)}>
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
