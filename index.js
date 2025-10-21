
// index.js - Dummy Express server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello from dummy Express server!');
});

// Health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Catch-all for 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Dummy Express server running on http://localhost:${PORT}`);
});
