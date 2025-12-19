import { Router } from "express";
import { getUnits, createUnit, updateUnit, deleteUnit } from "../controllers/unitsController";
import { upload } from "../config/multerCloudinary";
import { toggleHighlighted } from "../controllers/hightlightController";

const router = Router();

router.get("/", getUnits);
router.post("/", upload.array("images", 8), createUnit);
router.put('/:id', updateUnit);
router.delete('/:id', deleteUnit);
router.patch("/:id/highlight", toggleHighlighted);


export default router;