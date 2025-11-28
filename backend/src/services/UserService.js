import AppError from '../utils/AppError.js';
import UserRepository from '../repositories/UserRepository.js';

class UserService {
  constructor(userRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }
}

export default UserService;
