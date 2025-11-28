import AppError from '../utils/AppError.js';
import RoleRepository from '../repositories/RoleRepository.js';

class RoleService {
  constructor(roleRepository = new RoleRepository()) {
    this.roleRepository = roleRepository;
  }

  async getAllRoles() {
    return this.roleRepository.findAll();
  }

  async updateRole(id, updates) {
    if (!updates || Object.keys(updates).length === 0) {
      throw new AppError('No fields provided to update', 400);
    }

    const role = await this.roleRepository.updateById(id, updates);

    if (!role) {
      throw new AppError('Role not found', 404);
    }

    return role;
  }

  async deleteRole(id) {
    const deleted = await this.roleRepository.deleteById(id);

    if (!deleted) {
      throw new AppError('Role not found', 404);
    }

    return deleted;
  }
}

export default RoleService;
