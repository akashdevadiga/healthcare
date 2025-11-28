import AppError from '../utils/AppError.js';
import UserRepository from '../repositories/UserRepository.js';

class UserService {
  constructor(userRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async createUser(userData) {
    return this.userRepository.create(userData);
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

export default UserService;
