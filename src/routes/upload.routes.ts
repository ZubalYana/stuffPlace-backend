import { Router } from 'express';
import { upload } from '../middlewares/upload';
import { uploadUnitImage } from '../controllers/upload.constroller';

const router = Router();

router.post('/', upload.single('image'), uploadUnitImage);

export default router;