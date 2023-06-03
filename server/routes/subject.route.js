const express = require("express");
const router = express.Router();

const SubjectController = require("../controllers/subject.controller");

router
  .route("/")
  .get(SubjectController.getAll)
  .post(SubjectController.addSubject);

router
  .route("/:id")
  .get(SubjectController.getSubject)
  .put(SubjectController.updateSubject)
  .delete(SubjectController.deleteSubject);

module.exports = router;
