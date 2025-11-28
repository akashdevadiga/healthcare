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

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

export const getUserByEmail = async (req, res, next) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};
