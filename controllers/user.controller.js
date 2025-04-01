const uuid = require('uuid');
const User = require('../models/user.model');

const getUser = (req, res) => {
  const userId = req.params.id;
  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving user', error: err });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'success', data: user });
  });
}
const createUser = (req, res) => {
  const userData = req.body;
  const userId = uuid.v4();
  userData.id = userId;

  User.create(userData, (err, newUser) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating user', error: err });
    }
    res.status(201).json({ message: 'success', data: newUser });
  });
}
const updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  User.updateOne({ _id: userId }, updatedData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating user', error: err });
    }
    if (result.nModified === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'success', data: result });
  });
}
const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.deleteOne({ _id: userId }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting user', error: err });
    }
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'success', data: result });
  });
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};