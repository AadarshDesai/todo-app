import { z } from "zod";

export const userSchema = z.object({
    username: z.string().toLowerCase(),
    email: z.string().toLowerCase(),
    password: z.string(),
    fullName: z.string(),
})

export type User = z.infer<typeof userSchema>;