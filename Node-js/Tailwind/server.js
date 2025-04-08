// core Module 
const path = require('path');

// External Module
const express = require('express');

// Local Module
const rootdir = require('./util/PathUtil');

const app = express();

app.use(express.static(path.join(rootdir, 'public')));



// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

// router is used for routing the request to different pages
const userRouter = require("./routes/userRouter")
app.use(userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(rootdir, 'view', 'Home.html'));
});


// used for creating a server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});