import express from 'express';
import { createShift } from '../controllers/shift.controller.js';
import validate from '../validation/validate.js';
import { createShiftSchema } from '../validation/schemas/shift.schema.js';

const router = express.Router();

router.post('/', validate({ body: createShiftSchema }), createShift);

export default router;
