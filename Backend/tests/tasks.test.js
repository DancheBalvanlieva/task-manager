// tests/tasks.test.js
const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your app.js file
const mongoose = require('mongoose');
const Task = require('../src/models/Task'); // Adjust the path to your Task model

let server; // Declare a variable for the server

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Start the server on a different port to avoid conflicts
  server = app.listen(5001, () => {
    console.log('Test server running on port 5001');
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close(); // Ensure the server is closed after tests
});

beforeEach(async () => {
  // Clear the Task collection before each test
  await Task.deleteMany({});
});

describe('Task API', () => {
  it('should create a new task', async () => {
    const response = await request(server) // Use the test server
      .post('/api/tasks')
      .send({
        title: 'New Task',
        description: 'Description of the task',
        completed: false,
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  it('should get all tasks', async () => {
    await Task.create({
      title: 'New Task',
      description: 'Description of the task',
      completed: false,
    });

    const response = await request(server) // Use the test server
      .get('/api/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
  });
});
