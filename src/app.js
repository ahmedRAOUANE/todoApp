import React from "react";

// css styles
import "./assets/index.css";
import "./assets/normelize.css";
import "./assets/bootstrap.min.css";

// components
import TodoListBody from "./components/todoList";

const App = () => {
  return (
    <div className="container" id="App">
      <TodoListBody />
    </div>
  );
};

export default App;
