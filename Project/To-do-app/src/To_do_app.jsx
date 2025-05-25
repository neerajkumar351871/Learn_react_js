import React, { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";


function To_do_app() {
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [values, setValues] = useState([]);

  const clicked_btn = () => {
    if (!task || !date) {
      alert("Please enter both task and date.");
      return;
    }

    const newEntry = { task, date };
    setValues([...values, newEntry]); // add new task to the list
    setTask("");
    setDate("");
  };

  const handleDlete = (indexToDelete) => {
    const updatedValues = values.filter((_, index) => index !== indexToDelete);
    setValues(updatedValues);
  };

  const handleTaskChange = (e) => setTask(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  return (
    <div className="container bg-dark p-4 rounded mt-5" style={{ maxWidth: "800px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          className="form-control me-2"
          placeholder="Enter task"
          style={{ flex: 2 }}
        />
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="form-control me-2"
          style={{ flex: 1 }}
        />
        <button type="button" onClick={clicked_btn} className="btn btn-success">
          <RiAddLargeFill />

        </button>
      </div>

      {values.map((item, index) => (
        <div
          key={index}
          className="bg-secondary text-white p-3 rounded d-flex justify-content-between align-items-center mt-3"
        >
          <div style={{ flex: 3 }}>
            <h5 className="mb-1">{item.task}</h5>
            <small>Due Date: {item.date}</small>
          </div>
          <div className="d-flex gap-2" style={{ flexShrink: 0 }}>
            <button className="btn btn-danger btn-sm" onClick={() => handleDlete(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default To_do_app;
