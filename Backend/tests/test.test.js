// tests/tasks.test.js
const request = require('supertest');
const app = require('../app'); // Adjust the path to your Express app
const mongoose = require('mongoose');

// Connect to MongoDB for testing
before(async () => {
    await mongoose.connect('mongodb://localhost:27017/task_manager', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Clear the database before each test
beforeEach(async () => {
    await mongoose.connection.collection('tasks').deleteMany({});
});

// Close the database connection after all tests
after(async () => {
    await mongoose.connection.close();
});

describe('Task API Integration Tests', () => {
    it('should create a new task', async () => {
        const taskData = { title: 'New Task', completed: false };
        const response = await request(app)
            .post('/api/tasks')
            .send(taskData)
            .expect(201);

        expect(response.body).to.have.property('_id');
        expect(response.body.title).to.equal(taskData.title);
    });

    it('should get all tasks', async () => {
        await request(app).post('/api/tasks').send({ title: 'Task 1', completed: false });
        await request(app).post('/api/tasks').send({ title: 'Task 2', completed: false });

        const response = await request(app)
            .get('/api/tasks')
            .expect(200);

        expect(response.body.length).to.equal(2);
    });

    it('should update a task', async () => {
        const createdTask = await request(app).post('/api/tasks').send({ title: 'Task to Update', completed: false });

        const response = await request(app)
            .put(`/api/tasks/${createdTask.body._id}`)
            .send({ title: 'Updated Task', completed: true })
            .expect(200);

        expect(response.body.title).to.equal('Updated Task');
        expect(response.body.completed).to.equal(true);
    });

    it('should delete a task', async () => {
        const createdTask = await request(app).post('/api/tasks').send({ title: 'Task to Delete', completed: false });

        await request(app)
            .delete(`/api/tasks/${createdTask.body._id}`)
            .expect(204);

        const getResponse = await request(app).get('/api/tasks');
        expect(getResponse.body.length).to.equal(0);
    });
});
