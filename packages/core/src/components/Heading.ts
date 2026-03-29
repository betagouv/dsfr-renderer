import { z } from "zod";

export const Heading = {
	props: z.object({
		text: z.string().describe("Heading text content"),
		level: z
			.enum(["h1", "h2", "h3", "h4", "h5", "h6"])
			.optional()
			.describe("Heading level"),
		size: z
			.enum(["xs", "sm", "md", "lg", "xl"])
			.optional()
			.describe("Visual size (can differ from semantic level)"),
	}),
	description: "DSFR heading text (h1-h6)",
	hasChildren: false,
};
