import { z } from "zod";

export const todoSchema = z.object({
    title: z.string().min(1),
    starred: z.boolean().optional(),
    done: z.boolean().optional()
})

export type Todo = z.infer<typeof todoSchema>;