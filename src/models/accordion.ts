import { z } from "zod";

const itemSchema = z.object({
  heading: z.string(),
  content: z.string(),
});

export type Item = z.infer<typeof itemSchema>;
