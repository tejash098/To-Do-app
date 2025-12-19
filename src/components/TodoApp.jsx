import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [dueDate, setDueDate] = useState("");

  const hdlSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    setList([...list, { text: value, status: false, dueDate: dueDate }]);
    setValue("");
    setDueDate("");
  };

  const hdlCheck = (idx) => {
    const newList = list.map((item, i) =>
      i === idx ? { ...item, status: !item.status } : item
    );
    setList(newList);
  };

  const hdlDelete = (idx) => {
    setList(list.filter((_, i) => i !== idx));
  };

  return (
    <div className="todoapp">
      <h1>Manage your daily todo list.</h1>

      <form onSubmit={hdlSubmit}>
        <label htmlFor="todo">Add Todo:</label>
        <input
          type="text"
          id="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="duedate">Due Date:</label>
        <input type="date" id="duedate" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => hdlCheck(idx)}
            />

            <span className={item.status ? "completed" : ""}>{item.text}</span>
            <span>{item.status ? "Completed" : "Pending"}</span>
            <span>Created on: {new Date().toLocaleDateString()}</span>
            <span>Due Date: {item.dueDate}</span>
            <button onClick={() => hdlDelete(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
