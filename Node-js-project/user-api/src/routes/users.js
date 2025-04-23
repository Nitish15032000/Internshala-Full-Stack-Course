const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');
const { validateUser } = require('../middleware/validator');

// GET all users
router.get('/', getAllUsers);

// GET a specific user by ID
router.get('/:id', getUserById);

// POST a new user
router.post('/', validateUser, createUser);

// PUT (update) an existing user
router.put('/:id', validateUser, updateUser);

// DELETE a user
router.delete('/:id', deleteUser);

module.exports = router;