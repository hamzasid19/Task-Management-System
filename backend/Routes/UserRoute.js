import express from "express";

import { getUserById, updateUser } from "../Controllers/UserController.js";

const router = express.Router();

router.route("/:id").get(getUserById).patch(updateUser);

export default router;
