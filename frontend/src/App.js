/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

// src/App.js


/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/AuthLogin';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

/*
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <p>Welcome to your task management interface!</p>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

*/

/*
import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (title) => {
    // Create a new task object and update the state
    const newTask = { title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed }; // Toggle completed state
      }
      return task; // Return unchanged task
    });
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import api from './api'; // Import the Axios instance
import LoginForm from './components/LoginForm'; // Import LoginForm
import RegisterForm from './components/RegisterForm'; // Import RegisterForm
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data); // Assuming your backend returns the tasks in response.data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (title) => {
    try {
      const response = await api.post('/tasks', { title, completed: false });
      setTasks([...tasks, response.data]); // Add the new task to the state
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Toggle task completion
  const toggleComplete = async (index) => {
    const task = tasks[index];
    const updatedTask = { ...task, completed: !task.completed };

    try {
      await api.put(`/tasks/${task._id}`, updatedTask); // Update the task on the server
      const newTasks = [...tasks];
      newTasks[index] = updatedTask; // Update the task in state
      setTasks(newTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (index) => {
    const task = tasks[index];

    try {
      await api.delete(`/tasks/${task._id}`); // Delete the task from the server
      setTasks(tasks.filter((_, i) => i !== index)); // Remove it from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
*/


/*
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import api from './api'; // Import the Axios instance
import LoginForm from './components/LoginForm'; // Import LoginForm
import RegisterForm from './components/RegisterForm'; // Import RegisterForm
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data); // Assuming your backend returns the tasks in response.data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (title) => {
    try {
      const response = await api.post('/tasks', { title, completed: false });
      setTasks([...tasks, response.data]); // Add the new task to the state
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Toggle task completion
  const toggleComplete = async (index) => {
    const task = tasks[index];
    const updatedTask = { ...task, completed: !task.completed };

    try {
      await api.put(`/tasks/${task._id}`, updatedTask); // Update the task on the server
      const newTasks = [...tasks];
      newTasks[index] = updatedTask; // Update the task in state
      setTasks(newTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (index) => {
    const task = tasks[index];

    try {
      await api.delete(`/tasks/${task._id}`); // Delete the task from the server
      setTasks(tasks.filter((_, i) => i !== index)); // Remove it from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      {isLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
*/import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import api from './api'; // Import the Axios instance
import LoginForm from './components/LoginForm'; // Import LoginForm
import RegisterForm from './components/RegisterForm'; // Import RegisterForm
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // State to manage tasks
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data); // Assuming your backend returns the tasks in response.data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (title) => {
    try {
      const response = await api.post('/tasks', { title, completed: false });
      setTasks([...tasks, response.data]); // Add the new task to the state
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Toggle task completion
  const toggleComplete = async (index) => {
    const task = tasks[index];
    const updatedTask = { ...task, completed: !task.completed };

    try {
      await api.put(`/tasks/${task._id}`, updatedTask); // Update the task on the server
      const newTasks = [...tasks];
      newTasks[index] = updatedTask; // Update the task in state
      setTasks(newTasks);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (index) => {
    const task = tasks[index];

    try {
      await api.delete(`/tasks/${task._id}`); // Delete the task from the server
      setTasks(tasks.filter((_, i) => i !== index)); // Remove it from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Define the login function
  const handleLogin = async (credentials) => {
    try {
      const response = await api.post('/api/auth/login', credentials);
      console.log("Login successful:", response.data);
      // Add any additional logic for successful login (e.g., redirecting, setting state, etc.)
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Define the register function
  const handleRegister = async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      console.log("Registration successful:", response.data);
      // Add any additional logic for successful registration (e.g., redirecting, notifying the user, etc.)
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="app-container">
      <Header />
      {isLogin ? (
        <LoginForm onLogin={handleLogin} /> //{/* Pass onLogin as a prop */}
      ) : (
        <RegisterForm onRegister={handleRegister} />// {/* Pass onRegister as a prop */}
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
