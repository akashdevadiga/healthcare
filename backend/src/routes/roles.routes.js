import express from 'express';
import { deleteRole, listRoles, updateRoles } from '../controllers/role.controller.js';

const router = express.Router();

router.get('/', listRoles);
router.patch('/:id', updateRoles);
router.delete('/:id', deleteRole);

export default router;
