const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller');

router.route('/login').post(AuthController.login);
router.route('/register').post(AuthController.register);
router
  .route('/me')
  .get(AuthController.getMe)
  .put(AuthController.updateProfile);

module.exports = router;
