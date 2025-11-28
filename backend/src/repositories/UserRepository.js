import supabase from '../db/supabase.js';

class UserRepository {
  async findAll() {
    const { data, error } = await supabase
      .from('users')
      .select(
        'id, name, id_role, contact_number, shift_preference, created_at, updated_at',
      )
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return data;
  }
}

export default UserRepository;
