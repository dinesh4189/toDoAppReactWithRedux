import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./action";

const App = props => {
  console.log(props.todos);
  const [todo, setTodo] = useState("");

  const handleChange = event => setTodo(event.target.value);

  const handleClick = event => {
    props.addTodo(todo);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input type="text" value={todo} onChange={handleChange} />
      <br />
      <br />
      Qweeqwe
      <ul>
        {props.todos.length > 0 && props.todos.map(list => <li>{list}</li>)}
      </ul>
      <br />
      <br />
      <button name="Add" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todos => dispatch(addTodo(todos))
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
