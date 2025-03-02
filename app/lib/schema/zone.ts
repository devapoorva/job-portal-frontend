import { z } from "zod";
export const zoneSchema = z.object({
    id:z.number().optional(),
    name: z.string().min(1,"Name is required"),
    CountryId: z.number({ required_error: "Country is required"}),
  });
