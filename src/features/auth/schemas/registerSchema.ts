import z from "zod";

export const registerSchema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.email(),

  password: z.string().min(8, "Password must be at least 8 characters"),

  phone: z.string().regex(/^\+[1-9]\d{1,14}$/, "Invalid phone number"),

  role: z.enum(["LANDLORD", "TENANT"]),

  avatar: z.instanceof(File).optional().or(z.undefined()),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
