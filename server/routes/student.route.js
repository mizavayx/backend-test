const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/student.controller");

router
  .route("/")
  .get(StudentController.getAll)
  .post(StudentController.addStudent);

router
  .route("/:id")
  .get(StudentController.getStudent)
  .put(StudentController.updateStudent)
  .delete(StudentController.deleteStudent);

module.exports = router;
