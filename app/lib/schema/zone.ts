import { z } from "zod";
export const zoneSchema = z.object({
    name: z.string().min(2).max(50),
    country: z.number(),
  });
