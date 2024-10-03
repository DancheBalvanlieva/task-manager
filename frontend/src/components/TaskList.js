// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && <p>No tasks available</p>}
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
