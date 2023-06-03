const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please add fullname"],
  },

  schoolYear: {
    type: String,
    required: [true, "Please add school year"],
  },

  class: {
    type: mongoose.Schema.Types.String,
    ref: "Class",
  },

  gender: {
    type: String,
    required: [true, "Please add gender"],
  },

  dob: {
    type: String,
    required: [true, "Please add date of birth"],
  },

  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please add correct email type"],
    unique: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
