const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

// Load environment variables from .env file
const PORT = process.env.PORT || 2999;

// Define the routes and corresponding microservices
const services = {
    '/auth': 'http://localhost:3005',
    '/brand': 'http://localhost:3002',
    '/game': 'http://localhost:3003',
    '/user': 'http://localhost:3001',
};

// Set up proxy routes
Object.keys(services).forEach(context => {
    app.use(
        context,
        createProxyMiddleware({
            target: services[context],
            changeOrigin: true,
            pathRewrite: (path, req) => path.replace(context, context), // This ensures the context is not removed
        })
    );
});

// Basic route for health check
app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
