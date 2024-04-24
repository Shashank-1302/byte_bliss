const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Hardcoded username and password for demonstration
const hardcodedUsername = 'user';
const hardcodedPassword = 'password';

// Route for handling login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the username and password match
    if (username === hardcodedUsername && password === hardcodedPassword) {
        res.send('Login successful!');
        console.log('login succesful')
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
