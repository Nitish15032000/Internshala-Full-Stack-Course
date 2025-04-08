// core Module 
const path = require('path');

// External Module
const express = require('express');

// Local Module
const userRouter = require('./routes/userRouter');
const rootdir = require('./util/util');

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(rootdir, 'view', 'Home.html'));
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});