const express = require('express');
const cors = require("cors");
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.error(`CORS Error: Origin ${origin} is not allowed`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Load environment variables from .env file
const PORT = process.env.PORT || 2999;

const services = {
    '/auth': 'http://localhost:3005',
    '/brand': 'http://localhost:3002',
    '/game': 'http://localhost:3003',
    '/user': 'http://localhost:3001',
};

// Set up proxy routes
Object.keys(services).forEach(context => {
    console.log(`Setting up proxy for ${context} -> ${services[context]}`);
    app.use(
        context,
        createProxyMiddleware({
            target: services[context],
            changeOrigin: true,
            pathRewrite: (path, req) => {
                console.log(`Rewriting path ${path} to ${path.replace(context, context)}`);
                return path.replace(context, context);
            },
            onProxyRes: function (proxyRes, req, res) {
                try {
                    proxyRes.headers['Access-Control-Allow-Origin'] = allowedOrigins[0];
                } catch (error) {
                    console.error(`Error setting CORS headers for ${req.url}:`, error);
                }
            }
        })
    );
});

// Basic route for health check
app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

// Error handling for unhandled routes or middleware issues
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.message);
    res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err.message);
    } else {
        console.log(`API Gateway is running on port ${PORT}`);
    }
});
