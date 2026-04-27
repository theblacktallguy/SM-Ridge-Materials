import { Router } from "express";
import { submitContactRequest } from "../controllers/contactRequestController";

const router = Router();

router.post("/contact-request", submitContactRequest);

export default router;