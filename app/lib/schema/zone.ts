import { z } from "zod";
export const zoneSchema = z.object({
    name: z.string({ required_error: "Zone name is required"}),
    country: z.string({ required_error: "Country is required"}),
  });
