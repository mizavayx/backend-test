const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
    },

    isAdmin: Boolean,

    fullname: String,

    gender: String,

    dob: Date,

    address: String,

    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please add correct email type"],
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
