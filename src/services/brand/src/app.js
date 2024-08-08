const express = require('express');
const cors = require('cors');
const route = require('./routes'); // Import the route configuration
const connect_mysql = require('./dbs/mysql.dbs'); // Ensure the database connection is established

const app = express();

// connect database
connect_mysql;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json({ limit: '10mb' })); //to parse requests with JSON payloads (from req.body) 

// Set up routes
route(app);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
