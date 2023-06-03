const express = require("express");
const router = express.Router();

const ScoreController = require("../controllers/score.controller");

router
  .route("/")
  .get(ScoreController.getAll)
  .post(ScoreController.addScore);

router
  .route("/:id")
  .get(ScoreController.getScore)
  .put(ScoreController.updateScore)
  .delete(ScoreController.deleteScore);

module.exports = router;
