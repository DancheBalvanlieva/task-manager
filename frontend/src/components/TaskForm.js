// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit({ title, description, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
