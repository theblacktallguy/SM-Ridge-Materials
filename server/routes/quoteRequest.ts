import { Router } from "express";
import { submitQuoteRequest } from "../controllers/quoteRequestController";

const router = Router();

router.post("/quote-request", submitQuoteRequest);

export default router;