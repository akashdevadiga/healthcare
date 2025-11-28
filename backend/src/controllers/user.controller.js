import UserService from '../services/UserService.js';

const userService = new UserService();

export const listUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};
