import { z } from "zod";

export const Alert = {
  props: z.object({
    title: z.string().optional().describe("Alert title"),
    message: z.string().describe("Alert message content"),
    type: z
      .enum(["info", "success", "warning", "error"])
      .describe("Alert type/severity"),
    size: z.enum(["sm", "md"]).optional().describe("Alert size"),
    closable: z.boolean().optional().describe("Whether alert can be closed"),
  }),
  description: "DSFR alert banner with types",
  hasChildren: false,
};
