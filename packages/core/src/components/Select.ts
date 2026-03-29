import { z } from "zod";

export const Select = {
	props: z.object({
		label: z.string().describe("Select label text"),
		name: z.string().describe("Select name for form submission"),
		options: z
			.array(
				z.object({
					value: z.string(),
					label: z.string(),
				}),
			)
			.describe("Available options"),
		value: z.string().optional().describe("Currently selected value"),
		placeholder: z.string().optional().describe("Placeholder text"),
		disabled: z.boolean().optional().describe("Whether select is disabled"),
		required: z.boolean().optional().describe("Whether select is required"),
		state: z
			.enum(["default", "success", "error"])
			.optional()
			.describe("Validation state"),
		stateMessage: z.string().optional().describe("Validation message"),
	}),
	description: "DSFR select dropdown with options",
	hasChildren: false,
};
