import { z } from 'zod';

export const createShiftSchema = z.object({
  date: z.string().optional(),
  assignments: z
    .array(
      z.object({
        user_id: z.string().uuid({ message: 'user_id must be a valid UUID' }),
        role: z.string().min(1, 'role is required'),
      }),
    )
    .optional()
    .default([]),
});
