// routes/tasks.js
/*
const express = require('express');
const router = express.Router();

// Task model
const Task = require('../models/Task'); // Adjust the path as necessary

// Create a new task (POST /api/tasks)
router.post('/', async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        const newTask = new Task({ title, description, completed });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
});

// Export the router
module.exports = router;
*/
const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Make sure to import your Task model

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    completed: false,
  });
  try {
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
