import { Router } from "express";
import {
    createAdvantage,
    updateAdvantage,
    deleteAdvantage,
    getAdvantages,
} from "../controllers/advantagesController";

const router = Router();

router.get("/", getAdvantages);
router.post("/", createAdvantage);
router.put("/:id", updateAdvantage);
router.delete("/:id", deleteAdvantage);

export default router;
