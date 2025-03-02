import { z } from "zod";
export const emailPassSchema = z.object({
    email: z.string({required_error:"Email is requird"}).email("Invalid email"),
    password: z.string().nonempty("Password is required"),
});
