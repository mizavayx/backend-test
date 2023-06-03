const express = require("express");
const router = express.Router();

const ClassController = require("../controllers/class.controller");

router
  .route("/")
  .get(ClassController.getAll)
  .post(ClassController.addClass);

router
  .route("/:id")
  .get(ClassController.getClass)
  .put(ClassController.updateClass)
  .delete(ClassController.deleteClass);

module.exports = router;
