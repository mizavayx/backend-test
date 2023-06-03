const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router
  .route("/")
  .get(UserController.getAll)
  .post(UserController.addUser);

router
  .route("/:id")
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
