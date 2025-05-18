import React from 'react';

function Todoapp() {
  return (
    <>
    <div className="container bg-dark p-4 rounded mt-5" style={{ maxWidth: '800px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input type="text"className="form-control me-2"placeholder="Enter task"style={{ flex: 2 }}  />
        <input type="date"className="form-control me-2"style={{ flex: 1 }} />
        <button type="button" className="btn btn-success"> Add</button>
      </div>
       <div className="bg-secondary text-white p-3 rounded d-flex justify-content-between align-items-center mt-3">
        <div style={{ flex: 3 }}>
          <h5 className="mb-1">Sample Task</h5>
          <small>Due Date: 2025-05-10</small>
        </div>
        <div className="d-flex gap-2" style={{ flexShrink: 0 }}>
          <button className="btn btn-warning btn-sm">Update</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default Todoapp;
