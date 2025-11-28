import AppError from '../utils/AppError.js';
import RoleRepository from '../repositories/RoleRepository.js';

class RoleService {
  constructor(roleRepository = new RoleRepository()) {
    this.roleRepository = roleRepository;
  }

  async getAllUsers() {
    return this.roleRepository.findAll();
  }

  async updateUser(id, updates) {
    if (!updates || Object.keys(updates).length === 0) {
      throw new AppError('No fields provided to update', 400);
    }

    const user = await this.userRepository.updateById(id, updates);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }

  async deleteUser(id) {
    const deleted = await this.userRepository.deleteById(id);

    if (!deleted) {
      throw new AppError('User not found', 404);
    }

    return deleted;
  }
}

export default RoleService;
