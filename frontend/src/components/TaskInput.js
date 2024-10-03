// components/TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (inputValue.trim()) {
      addTask(inputValue); // Call the addTask function passed from App
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
