// src/components/Task.js
import React from 'react';

const Task = ({ task }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button>Mark Complete</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Task;
