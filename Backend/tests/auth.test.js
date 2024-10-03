// tests/auth.test.js
const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your app.js file
const mongoose = require('mongoose');

beforeAll(async () => {
  // Connect to MongoDB for testing
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Clean up and close the database connection
  await mongoose.connection.close();
});

describe('Authentication API', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuserasfas',
        password: 'testpasswordafsas',
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'dancheuser',
        password: 'password123',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not login with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'oknemavakov',
        password: 'password123',
      });
    expect(response.statusCode).toBe(401);
  });
});
