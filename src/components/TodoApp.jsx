import React, { useState } from "react";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setList([...list, { text: value, completed: false }]);
      setValue("");
    }
  };

  const handleRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleCheckboxChange = (index) => {
    const newList = [...list];
    newList[index].completed = !newList[index].completed;
    setList(newList);
  };

  return (
    <>
      <div className="body">
        <h1>TODO APP</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">Add Todo: </label>
          <input
            type="text"
            id="todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(index)}
              />

              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>

              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
