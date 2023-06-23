import { useState } from "react";

// components
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// uuid v4
import {v4 as uuidv4 } from "uuid";

uuidv4();

const TodoListBody = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        isEditing: false,
      },
    ]);
  };

  const delet = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, todo: value }
          : todo
      )
    );
  };

  return (
    <div className="todo-app-body p-3 text-light rounded-4">
      <h1 className="p-3 border rounded-3 container cont">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="pt-3 container cont">
        <h3 className="text-start">Todo List : </h3>
        <span>{todos === [] ? "no tasks to do wright now" : ""}</span>
        {todos.map((todo, index) => (
          <TodoItem
            index={index}
            task={todo}
            key={index}
            delet={delet}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListBody;
