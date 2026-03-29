import { z } from "zod";

export const Text = {
	props: z.object({
		text: z.string().describe("Text content"),
		variant: z
			.enum(["default", "sm", "xs", "lead", "bold", "muted"])
			.optional()
			.describe("Text style variant"),
	}),
	description: "DSFR paragraph text with variants",
	hasChildren: false,
};
