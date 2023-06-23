import React, { useState } from "react";

// React icons
import { AiOutlinePlusCircle } from "react-icons/ai";

// components
import Popup from "./popup";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [popup, setPopup] = useState(false);

  const handleSubmit = () => {
    addTodo(value);
    setValue(""); // empty the input value
  };

  return (
    <form
      className="d-flex container justify-content-between my-3 p-0 cont"
      id="form"
      onSubmit={
        value !== ""
          ? (e) => {
              e.preventDefault();
              handleSubmit();
            }
          : (e) => {
              e.preventDefault();
              setPopup(true);
            }
      }
    >
      <input
        className="input-todo py-1 px-2 rounded-2 me-3 ms-0"
        type="text"
        value={value}
        placeholder="what is the task to day ?"
        onChange={(e) => {
          setValue(e.target.value);
          setPopup(false);
        }}
        onFocus={() => setPopup(false)}
      />
      <button type="submit" className="btn btn-primary d-flex">
        <span className="d-none d-md-block">Add Task</span>
        <span className="ms-md-2">
          <AiOutlinePlusCircle />
        </span>
      </button>
      {popup && <Popup id="form" />}
    </form>
  );
};

export default TodoForm;
