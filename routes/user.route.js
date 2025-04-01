const express = require('express');
const { getUser, updateUser, deleteUser, createUser } = require('../controllers/user.controller');
const router = express.Router();

router
  .route('/')
  .post(createUser);
router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;