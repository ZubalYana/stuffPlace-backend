import { upsertContacts, getContacts } from "../controllers/contactsController";
import { Router } from "express";

const router = Router();

router.get("/", getContacts);
router.put("/", upsertContacts);

export default router;