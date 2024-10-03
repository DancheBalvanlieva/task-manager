// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{task.title}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TaskItem;
