// src/validation/auth.schema.ts
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});
// Creates a TypeScript type from the schema
export type LoginFormData = z.infer<typeof loginSchema>;
