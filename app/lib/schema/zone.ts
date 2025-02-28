import { z } from "zod";
export const zoneSchema = z.object({
    name: z.string().min(1,"Name is required"),
    country: z.string({ required_error: "Country is required"}),
  });
