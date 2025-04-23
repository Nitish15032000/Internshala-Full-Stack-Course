const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./util/db');
const { requestLogger } = require('./middlewares/logger');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const usersRouter = require('./routes/users');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(requestLogger); // Custom logging

// Routes
app.use('/users', usersRouter);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port localhost:${PORT}`));