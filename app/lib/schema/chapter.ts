import { z } from "zod";
export const chapterSchema = z.object({
    name: z.string().min(1,"Name is required"),
    zone: z.string({ required_error: "Zone is required"}),
  });
