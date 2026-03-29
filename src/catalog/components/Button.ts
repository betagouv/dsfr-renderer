import { z } from "zod";

export const Button = {
  props: z.object({
    label: z.string().describe("Button text content"),
    variant: z
      .enum(["primary", "secondary", "tertiary"])
      .optional()
      .describe("Visual style variant"),
    size: z.enum(["sm", "md", "lg"]).optional().describe("Button size"),
    disabled: z.boolean().optional().describe("Whether button is disabled"),
    icon: z.string().optional().describe("Icon name (e.g., 'ri-home-line')"),
    iconPosition: z.enum(["left", "right"]).optional().describe("Icon position"),
  }),
  description: "DSFR button with variants and optional icon",
  hasChildren: false,
};
