import express from "express";
import { createUser, deleteUser, getUser, singleUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", singleUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;