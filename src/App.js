import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const [input, setInput] = React.useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(input));
    setInput("");
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <Input input={input} setInput={setInput} addTodo={addTask} />
      {status === "loading" && <h2>Loading</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
