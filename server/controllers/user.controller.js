const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

/**
 * @desc Get all users
 * @route  /api/v1/users/
 * @method GET
 * @access public
 */
exports.getAll = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res
    .status(201)
    .json({ success: true, count: users.length, data: users });
});

/**
 * @desc Get single user
 * @route /api/v1/users/:id
 * @method GET
 * @access public
 */
exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(201).json({ success: true, data: user });
});

/**
 * @desc Add User
 * @route /api/v1/users
 * @method POST
 * @access public
 */
exports.addUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({ success: true, data: user });
});

/**
 * @desc Update User
 * @route /api/v1/users/:id
 * @method PUT
 * @access private
 * @requires sameUserId
 */
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

/**
 * @desc Delete User
 * @route /api/v1/users/:id
 * @method DELETE
 * @access private
 * @requires sameUserId
 */
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
