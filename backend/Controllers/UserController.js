import asyncHandler from "../Middleware/asyncHandler.js";
import { UserModel } from "../Schema/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists! ");
  }
  const newUser = new UserModel({ username, email, password });
  newUser.password = await bcrypt.hash(password, 10);
  await newUser.save();
  res.status(201).json({ message: "User created successfully", success: true });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Password is incorrect");
  }
  const jwtToken = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    process.env.JWT_KEY,
    { expiresIn: "1d" }
  );
  res.status(200).json({
    message: "User logged in successfully",
    success: true,
    token: jwtToken,
    email,
    name: user.username,
    id: user._id,
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.send({ user });
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10);
    await user.save();
  }
  res.send({ user });
});
export { registerUser, loginUser, getUserById, updateUser };
