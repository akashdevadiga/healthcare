import ShiftService from '../services/ShiftService.js';

const shiftService = new ShiftService();

export const createShift = async (req, res, next) => {
  try {
    const result = await shiftService.createShift(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};
