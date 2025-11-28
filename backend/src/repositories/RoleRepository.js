import supabase from '../db/supabase.js';

class RoleRepository {
  async findAll() {
    const { data, error } = await supabase
      .from('roles')
      .select(
        'id, id_role, role_name, created_at, updated_at',
      )
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return data;
  }

  async updateById(id, updates) {
    const { data, error } = await supabase
      .from('roles')
      .update(updates)
      .eq('id', id)
      .select(
        'id, id_role, created_at, updated_at',
      )
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }

    return data; // null when no row matches
  }

  async deleteById(id) {
    const { data, error } = await supabase
      .from('roles')
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

export default RoleRepository;