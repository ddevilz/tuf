import { Router } from "express";
import { fetchResponses } from "../controller/fetchResponse.js";
import { CodeSubmit } from "../controller/codeSubmit.js";

const router = Router();

router.post("/submit", CodeSubmit);
router.get("/fetch", fetchResponses);

export default router;
