const express = require('express');
const { getUser, updateUser, deleteUser, createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/:id', authenticate, getUser).patch(authenticate, updateUser).delete(authenticate, deleteUser);
router.post('/', createUser);

module.exports = router;