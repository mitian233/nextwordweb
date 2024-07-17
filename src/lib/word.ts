import { z } from "zod";
export const WordJsonSchema = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  wordJson: z.string(),
});

// array validator
export const wordsArraySchema = z.array(WordJsonSchema);

export type Word = z.infer<typeof WordJsonSchema>;
