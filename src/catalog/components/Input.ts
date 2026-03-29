import { z } from "zod";

export const Input = {
  props: z.object({
    label: z.string().describe("Input label text"),
    name: z.string().describe("Input name for form submission"),
    type: z
      .enum(["text", "email", "password", "number", "tel", "url", "date"])
      .optional()
      .describe("Input type"),
    placeholder: z.string().optional().describe("Placeholder text"),
    value: z.string().optional().describe("Current input value"),
    hint: z.string().optional().describe("Helper text below input"),
    disabled: z.boolean().optional().describe("Whether input is disabled"),
    required: z.boolean().optional().describe("Whether input is required"),
    state: z
      .enum(["default", "success", "error"])
      .optional()
      .describe("Validation state"),
    stateMessage: z.string().optional().describe("Validation message"),
  }),
  description: "DSFR input field with label and validation states",
  hasChildren: false,
};
