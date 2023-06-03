const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  qualifyingScore: {
    type: Number,
    required: true,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
