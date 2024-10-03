/*const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');

// Add this line to integrate the auth routes
app.use(express.json()); // This should be included before your routes

// Your MongoDB connection code...

// Import the auth routes
//const authRoutes = require('./routes/auth');

// Use the auth routes
app.use('/api/auth', authRoutes);
//const uri = 'mongodb://localhost:27017/task_manager';

// Connect to MongoDB
//const mongoose = require('mongoose');

// MongoDB connection string
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message); // Updated error message
  });


// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
/*const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Import routes
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/auth', authRoutes);

// Test route
app.post('/test', (req, res) => {
    console.log('Test request body:', req.body);
    res.json({ received: req.body });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

/*
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Import routes
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/auth', authRoutes);

// Test route
app.post('/test', (req, res) => {
    console.log('Test request body:', req.body);
    res.json({ received: req.body });
});

// Sample route for root
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

*/
/*
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Import routes
const authRoutes = require('./routes/auth');

// Use auth routes
app.use('/api/auth', authRoutes);

// Sample route for root
app.get('/', (req, res) => {
  console.log('Received a GET request at /'); // Add this line to log requests
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/


/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Include CORS if you want to allow cross-origin requests
const dotenv = require('dotenv'); // Include dotenv to manage environment variables
// Import routes

// Use auth routes


dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors()); // Use CORS middleware

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks'); // Import the task routes

// Use auth and task routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes); // Use task routes

// Sample route for root
app.get('/', (req, res) => {
  console.log('Received a GET request at /'); // Log requests
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/api/test', (req, res) => {
  console.log('Test request body:', req.body);
  res.json({ received: req.body });
});


*/

/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
//const app = require('../src/app'); // Adjust if your file structure is different

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager';
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// Import routes
const authRoutes = require('./routes/auth'); // Auth routes
const taskRoutes = require('./routes/tasks'); // Task routes

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes); // Ensure this is included

// Sample route for root
app.get('/', (req, res) => {
  console.log('Received a GET request at /'); // Log incoming requests
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/

/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If you're using cors
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes (adjust as necessary)
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Start the server only if not in testing mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // If you're using CORS
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware for parsing JSON bodies

// Import routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Use the routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/tasks', taskRoutes);  // Task management routes

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task_manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Sample route for root
app.get('/', (req, res) => {
  res.send('Hello World!'); // Simple test route to confirm server is working
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
