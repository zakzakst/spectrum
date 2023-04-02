import { z } from "zod";

const itemSchema = z.object({
  id: z.number(),
  heading: z.string(),
  content: z.string(),
});

export type Item = z.infer<typeof itemSchema>;

export type GetItemsResponse = {
  data: {
    items: Item[];
  };
};
