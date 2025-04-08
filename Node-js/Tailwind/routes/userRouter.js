// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const rootDir = require("../util/PathUtil");

// userRouter.use(express.static(path.join(rootDir, 'public')));

userRouter.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'view', 'contact.html'));
});

module.exports = userRouter;