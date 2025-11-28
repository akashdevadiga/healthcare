import express from 'express';
import { deleteUser, listUsers, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', listUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
