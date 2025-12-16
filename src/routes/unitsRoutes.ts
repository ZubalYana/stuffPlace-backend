import { Router } from "express";
import { getUnits, createUnit, updateUnit, deleteUnit } from "../controllers/unitsController";
import { upload } from "../config/multerCloudinary";

const router = Router();

router.get("/", getUnits);
router.post("/", upload.single("image"), createUnit);
router.put('/:id', updateUnit);
router.delete('/:id', deleteUnit);

export default router;