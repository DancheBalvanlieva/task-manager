// src/pages/Dashboard.js
import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const addTask = (task) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="dashboard">
      <TaskForm onTaskSubmit={addTask} />
      <TaskList />
    </div>
  );
}

export default Dashboard;
