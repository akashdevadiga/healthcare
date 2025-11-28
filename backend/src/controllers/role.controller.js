import RoleService from '../services/RoleService.js';

const roleService = new RoleService();

export const listRoles = async (req, res, next) => {
  try {
    const users = await roleService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

export const updateRoles = async (req, res, next) => {
  try {
    const updated = await roleService.updateRole(req.params.id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    return next(error);
  }
};

export const deleteRole = async (req, res, next) => {
  try {
    await roleService.deleteRole(req.params.id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
