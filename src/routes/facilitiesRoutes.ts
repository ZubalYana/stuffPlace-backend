import { Router } from "express";
import {
    getFacilities,
    createFacility,
    updateFacility,
    deleteFacility,
} from "../controllers/facilitiesController";

const router = Router();

router.get("/", getFacilities);
router.post("/", createFacility);
router.put("/:id", updateFacility);
router.delete("/:id", deleteFacility);

export default router;
