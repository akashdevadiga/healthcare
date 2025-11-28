import ShiftRepository from '../repositories/ShiftRepository.js';

class ShiftService {
  constructor(shiftRepository = new ShiftRepository()) {
    this.shiftRepository = shiftRepository;
  }

  async createShift(payload) {
    const date = payload.date || new Date().toISOString().slice(0, 10);

    const shift = await this.shiftRepository.upsertShiftByDate(date);
    const assignments = await this.shiftRepository.addAssignments(
      shift.id,
      payload.assignments,
    );

    return { shift, assignments };
  }
}

export default ShiftService;
