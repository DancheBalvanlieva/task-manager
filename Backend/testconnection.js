const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/task_manager';

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    mongoose.connection.close(); // Close the connection after test
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
