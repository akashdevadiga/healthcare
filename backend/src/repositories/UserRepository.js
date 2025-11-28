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

  async updateById(id, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select(
        'id, name, id_role, contact_number, shift_preference, created_at, updated_at',
      )
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }

    return data; // null when no row matches
  }

  async deleteById(id) {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select('id')
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }

    return data; // null when no row matches
  }
}

export default UserRepository;
