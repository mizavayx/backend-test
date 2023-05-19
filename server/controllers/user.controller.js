const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

//@DESC Get All Users
//@ROUTE /api/v1/users
//@METHOD GET
exports.getAll = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(201).json({ success: true, count: users.length, data: users });
});

//@DESC Get Single User
//@ROUTE /api/v1/users/:id
//@METHOD GET
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(201).json({ success: true, data: user });
});

//@DESC Add User
//@ROUTE /api/v1/users
//@METHOD POST
exports.addUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, data: user });
});

//@DESC Update User
//@ROUTE /api/v1/users/:id
//@METHOD PUT
exports.updateUser = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (req.user.id !== user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({ success: true, data: user });
});

//@DESC Delete User
//@ROUTE /api/v1/users/:id
//@METHOD DELETE
exports.deleteUser = asyncHandler(async (req, res) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (req.user.id !== user._id.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await user.delete();

  res.status(201).json({ success: true, data: {} });
});
