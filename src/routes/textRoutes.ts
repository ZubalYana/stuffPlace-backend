import { Router } from "express";
import { getText, uploadText } from "../controllers/textController";

const router = Router();

router.get("/", getText);
router.put("/", uploadText);

export default router;