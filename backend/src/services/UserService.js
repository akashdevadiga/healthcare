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
    const existingUser = await this.userRepository.findByEmail(userData.email);

    if (existingUser) {
      throw new AppError('User with this email already exists', 409);
    }

    return this.userRepository.create(userData);
  }

  async getUserByEmail(email) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}

export default UserService;
