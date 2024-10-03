// routes/auth.js
/*const express = require('express');
const router = express.Router();

// Dummy user registration endpoint
router.post('/register', (req, res) => {
    // Here you would typically handle user registration logic, e.g., 
    // hashing passwords, saving user info to the database, etc.
    const { username, password } = req.body;

    // Placeholder response (you would replace this with real logic)
    if (username && password) {
        return res.status(201).json({ message: 'User registered successfully!' });
    } else {
        return res.status(400).json({ message: 'Username and password are required!' });
    }
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();

// Registration route
router.post('/register', (req, res) => {
    console.log('Request body:', req.body); // Log the request body for debugging
    const { username, password } = req.body; // Destructure username and password
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Simulate registration logic (e.g., save to database)
    res.status(201).json({ message: 'User registered successfully!' });
});

module.exports = router;

