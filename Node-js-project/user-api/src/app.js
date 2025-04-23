const express = require('express');
const userRoutes = require('./routes/users');
const logger = require('./middleware/logger');

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Custom middleware for logging
app.use(logger);

// Routes
app.use('/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});