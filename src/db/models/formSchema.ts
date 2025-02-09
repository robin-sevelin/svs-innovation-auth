import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email().min(10).max(20),
  password: z.string().min(5).max(20),
});
