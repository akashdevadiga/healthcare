import express from 'express';
import { createUser, deleteUser, listUsers, updateUser } from '../controllers/user.controller.js';
import validate from '../validation/validate.js';
import { createUserSchema } from '../validation/schemas/user.schema.js';

const router = express.Router();

router.get('/', listUsers);
router.post('/', validate({ body: createUserSchema }), createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
