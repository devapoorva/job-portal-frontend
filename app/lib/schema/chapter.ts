import { z } from "zod";
export const chapterSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  zoneId: z.number({ required_error: "Zone is required" }),
});
