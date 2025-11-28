import supabase from '../db/supabase.js';

class ShiftRepository {
  async upsertShiftByDate(date) {
    const { data, error } = await supabase
      .from('shifts')
      .upsert({ date }, { onConflict: 'date' })
      .select('*')
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to upsert shift: ${error.message}`);
    }

    return data;
  }

  async addAssignments(shiftId, assignments) {
    if (!assignments?.length) return [];

    const payload = assignments.map((item) => ({ ...item, shift_id: shiftId }));

    const { data, error } = await supabase
      .from('shift_assignments')
      .upsert(payload, { onConflict: 'shift_id,user_id' })
      .select('*');

    if (error) {
      throw new Error(`Failed to add assignments: ${error.message}`);
    }

    return data;
  }
}

export default ShiftRepository;
