const { z } = require("zod");

// creating an object schema
const sigupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must not be at lest of 3 chars." })
    .max(255, { message: "Name must be at more of 255 chars." }),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"}),
    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must not be at lest of 10 chars." })
    .max(10, { message: "Phone must be at more of 10 chars." }),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must not be at lest of 7 chars." })
    .max(1023, { message: "Password must be at more of 1025 chars." }),
});

const loginSchema= z.object({
  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .email({message:"Invalid email address"}),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must not be at lest of 7 chars." })
    .max(1023, { message: "Password must be at more of 1025 chars." }),
})

module.exports={sigupSchema,loginSchema};