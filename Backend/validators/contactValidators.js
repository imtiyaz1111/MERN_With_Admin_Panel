const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must not be at lest of 3 chars." })
    .max(255, { message: "Name must be at more of 255 chars." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Name must not be at lest of 3 chars." })
    .max(255, { message: "Name must be at more of 255 chars." }),
});

module.exports = { contactSchema};
