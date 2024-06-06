import express from "express";
import { getUsersController } from "../controllers/userController.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/", protectRoute, getUsersController);

export default router;