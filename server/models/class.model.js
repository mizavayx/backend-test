const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  schoolYear: {
    type: String,
    required: [true, "Please add school year"],
  },

  className: {
    type: String,
    unique: true,
    required: [true, "Please add class name"],
  },

  formTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  maxStudent: Number,

  students: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Student",
      },
    },
  ],
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
