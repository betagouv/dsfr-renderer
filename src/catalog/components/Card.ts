import { z } from "zod";

export const Card = {
  props: z.object({
    title: z.string().optional().describe("Card title"),
    description: z.string().optional().describe("Card description"),
    image: z.string().optional().describe("Image URL"),
    imageAlt: z.string().optional().describe("Image alt text"),
    link: z.string().optional().describe("Link URL"),
    linkLabel: z.string().optional().describe("Link text"),
    size: z.enum(["sm", "md", "lg"]).optional().describe("Card size"),
    horizontal: z.boolean().optional().describe("Horizontal layout"),
  }),
  description: "DSFR container card for content sections",
  hasChildren: true,
};
