import { Router } from "express";
import { getAdmins } from "../controllers/management.controller.js";

const router = Router();

router.get("/admins", getAdmins);

export default router;
