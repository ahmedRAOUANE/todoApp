import { useState } from "react";

// react icons
import { BsCheck, BsPencilSquare, BsFillTrash3Fill } from "react-icons/bs";

// components
import Popup from "./popup";

const TodoItem = ({ task, delet, edit, index }) => {
  const [value, setValue] = useState(task.task);
  const [popup, setPopup] = useState(false);
  const id = `task-${index + 1}`;

  return (
    <div>
      <form
        className="todo-item row text-start my-3 p-2 rounded-3"
        id={id}
        onSubmit={
          value !== ""
            ? (e) => {
                e.preventDefault();
                edit(task.id, value);
              }
            : (e) => {
                e.preventDefault();
                setPopup(!popup);
              }
        }
      >
        <span className="col-2">{index + 1}</span>
        <input
          className={`col-5 p-2 rounded-3 output text-black`}
          type={task.isEditing ? "text" : "disabled"}
          value={value}
          onChange={task.isEditing
              ? (e) => {
                  setValue(e.target.value);
                }
              : null
            }
          onFocus={() => {
            setPopup(false);
          }}
        />
        <button
          type="submit"
          className="col-2 btn btn-primary ms-2 me-0 px-0 p-md-2 ms-auto d-flex justify-content-evenly"
        >
          <span className="d-none d-md-block">
            {task.isEditing ? "done" : "Edit"}
          </span>
          <span>{task.isEditing ? <BsCheck /> : <BsPencilSquare />}</span>
        </button>
        <button
          onClick={() => delet(task.id)}
          className="col-2 btn btn-primary ms-2 me-0 px-0 p-md-2 d-flex justify-content-evenly"
        >
          <span className="d-none d-md-block">delete</span>
          <span>
            <BsFillTrash3Fill />
          </span>
        </button>
      </form>
      {popup && <Popup id={id} />}
    </div>
  );
};

export default TodoItem;
