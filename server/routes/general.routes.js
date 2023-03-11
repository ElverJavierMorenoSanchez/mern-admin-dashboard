import { Router } from "express";
import {
  getUser,
  getDashboardStats,
} from "../controllers/general.controller.js";

const router = Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
