import express from "express";
import { registerUser, getAllUsers } from "../controllers/user.controller.js";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/allUsers", verifyAdmin, getAllUsers);

export default router;
