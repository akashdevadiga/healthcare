import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  id_role: z.string().uuid({ message: 'id_role must be a valid UUID' }),
  contact_number: z.string().min(1, 'contact_number is required'),
  shift_preference: z.string().min(1, 'shift_preference is required'),
});
