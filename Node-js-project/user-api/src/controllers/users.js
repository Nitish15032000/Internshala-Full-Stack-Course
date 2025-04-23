const { users } = require('../data/users');

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// Create a new user
const createUser = (req, res) => {
  const newUser = {
    id: (users.length + 1).toString(),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update an existing user
const updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.status(200).json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// Delete a user
const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.status(200).json(deletedUser[0]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};