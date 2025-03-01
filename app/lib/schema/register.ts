import { z } from "zod";
export const registerSchema = z.object({
    firstName: z.string().min(1,"Name is required"),
    lastName: z.string(),
    email: z.string({required_error:""}).email("Invalid email"),
    mobile: z.string({required_error:""}).regex(/^\d{10}$/, "Invalid mobile number"),
    userType: z.string(),
    cityId: z.string(),
  });
