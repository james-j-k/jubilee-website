import { z } from "zod";

export const contactEnquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  phone: z.string().trim().min(1, "Enter a phone number.").max(40),
  enquiryType: z.enum(["household", "commercial", "safety", "general"]),
  message: z.string().trim().min(1, "Tell us how we can help.").max(2_000),
});
