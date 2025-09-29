import { Router } from 'express';
import { getNotes, getNOteById } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:noteId', getNOteById);

export default router;
