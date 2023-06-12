const express = require('express');
const router = express.Router();
const { protectMiddleware } = require('../middlewares/protectRoutes');
const UserController = require('../controllers/user.controller');

router
  .route('/')
  .get(UserController.getAll)
  .post(protectMiddleware, UserController.addUser);

router
  .route('/:id')
  .get(UserController.getUser)
  .put(protectMiddleware, UserController.updateUser)
  .delete(protectMiddleware, UserController.deleteUser);

module.exports = router;
